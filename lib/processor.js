
goog.provide('ncnode.lib.processor');

goog.require('goog.array');

goog.require('ncnode.lib.clazz');
goog.require('ncnode.lib.type');



/**
 * @constructor
 * @param {string} name The name of the object/file we are processing.
 * @param {Object} obj An instance of the node object to scrutinize.
 * @param {Object.<string, string>} docs All the documents to search for extra
 *    information.  This is a object name -> documentaiton map.
 * @param {Object.<string, string>} typedata All the type data information.
 * @param {string=} coreRequires If specified will not use the defaule
 *  require('type') to initialise the node object.
 * @param {string=} overrideOverview Override documentation to use for
 *    namespace overview.
 */
ncnode.lib.processor =
    function(name, obj, docs, typedata, coreRequires, overrideOverview) {
  this.name_ = name.replace('.js', '');
  this.obj_ = obj;
  this.docs_ = docs;
  this.typedata_ = typedata;
  this.class_ = new ncnode.lib.clazz('node.' + this.name_);
  this.coreRequires_ = coreRequires || 'require("' + this.name_ + '")';
  this.class_.nodeRequire = this.coreRequires_;
  this.class_.createNamespace('node.' + this.name_,
      overrideOverview || this.getClassOverview_());
};


/**
 */
ncnode.lib.processor.prototype.process = function() {
  for (var i in this.obj_) {
    if (i.charAt(0) === '_' || i.charAt(i.length - 1) === '_')
    { continue; } // Ignore privates

    var val = this.obj_[i];
    var isObject = i.charAt(0) === i.charAt(0).toUpperCase() &&
        i.toUpperCase() !== i; // Ignore caps constants
    var isFunction = !isObject && typeof(val) === 'function';
    if (isObject) {
      var req = this.coreRequires_ + '.' + i;
      new ncnode.lib.processor(this.name_ + '.' + i, val, this.docs_,
                               this.typedata_, req).
          process();
    } else if (isFunction) {
      this.documentFunction_(i, val);
    } else {
      this.documentAttribute_(i, val);
    }
  }
  ncnode.lib.processor.dumpClassFile(this.name_, this.class_);
};


/**
 * Writes the wrapper file to disk
 * @param {string} name The name of the class to write out.
 * @param {ncnode.lib.clazz} clazz The clas to dump to disk.
 */
ncnode.lib.processor.dumpClassFile = function(name, clazz) {
  require('fs').writeFileSync(
      ncnode.lib.gencode.WRAPPERS_DIR + '/' + name + '.js',
      clazz.toString());
};


/**
 * Adds the funciton description to this class descriptor.
 * @private
 * @param {string} name The name of the function.
 * @param {Function} val The actual value of this function (the function
 *    itself).
 */
ncnode.lib.processor.prototype.documentFunction_ = function(name, val) {
  this.class_.addFunct(name, this.evalFunctionDesc_(name, val),
                       this.evalFunctionArgs_(name, val),
                       this.evalFunctionReturnType_(name, val), false);
};


/**
 * Adds the attribute description to this class descriptor.
 * @private
 * @param {string} name The name of the attribute.
 * @param {*} val The actual value of thisattribute.
 */
ncnode.lib.processor.prototype.documentAttribute_ = function(name, val) {
  this.class_.addAttr(this.evalAttrType_(name, val), name,
                      this.evalAttrDesc_(name, val), false);
};


/**
 * Attempts to work out the args of the specified function
 * @private
 * @param {string} name The name of the function.
 * @param {*} val The actual value of this function.
 * @return {Array.<ncnode.lib.type>} The type of this function args.
 */
ncnode.lib.processor.prototype.evalFunctionArgs_ = function(name, val) {
  var str = val.toString();
  str = str.substring(str.indexOf('(') + 1);
  str = str.substring(0, str.indexOf(')'));
  var args = [];
  goog.array.forEach(str.split(','), function(arg) {
    arg = goog.string.trim(arg);
    if (!arg) return;
    var optional = arg.indexOf('/*optional*/') >= 0;
    if (optional) { arg = arg.replace('/*optional*/', ''); }
    if (arg.indexOf('/*') >= 0) { arg = arg.substring(0, arg.indexOf('/*')); }
    if (arg.indexOf('*/') >= 0) { arg = arg.substring(0, arg.indexOf('*/')); }
    arg = goog.string.trim(arg);
    args.push(this.getTypeData_(name, arg, optional));
  }, this);
  return args;
};


/**
 * Attempts to work out the return type of the specified function
 * @private
 * @param {string} name The name of the function.
 * @param {*} val The actual value of this function.
 * @return {ncnode.lib.type} The type of this function.
 */
ncnode.lib.processor.prototype.evalFunctionReturnType_ = function(name, val) {
  return this.getTypeData_(name, 'returns');
};


/**
 * Attempts to work out the type of the specified attribute
 * @private
 * @param {string} name The name of the attribute.
 * @param {*} val The actual value of this attribute.
 * @return {string} The type of this attribute.
 */
ncnode.lib.processor.prototype.evalAttrType_ = function(name, val) {
  return this.getTypeData_(null, name).type;
};


/**
 * Gets the type data for the specified function and argument
 * @private
 * @param {string?} functionName The name of the funciton.
 * @param {string} argName The name of the function argument or 'returns' for
 *    the returns type.
 * @param {boolean=} optionalOverride If not specified we will try to
 *    determine from the markdown wether this is optional.
 * @return {ncnode.lib.type} The return type information.
 */
ncnode.lib.processor.prototype.getTypeData_ =
    function(functionName, argName, optionalOverride) {
  var key = 'node.' + this.name_ + '#';
  if (functionName) { key += functionName + ':'; }
  key += argName;
  var type = this.typedata_[key] || this.evaluateType_(functionName, argName);
  if (!type) return null;
  var idx = type.indexOf(' ');
  var desc = '';
  if (idx >= 0) {
    desc = type.substring(idx + 1);
    type = type.substring(0, idx);
  }

  if (optionalOverride === true && type.indexOf('=') !== type.length - 1) {
    type += '=';
  }
  return new ncnode.lib.type(type, argName, desc);
};


ncnode.lib.processor.prototype.evaluateType_ =
    function (functionName, argName) {
  switch(argName) {
    case 'returns': return null; // If no returns specified assume no returns
    case 'message': return 'string';
    case 'err': return 'Error';
    case 'callback': return 'function(Error=,...*):undefined';
    case 'operator': return 'function(*,*):boolean';
    case 'actual':
    case 'expected': return '*';
    case 'obj':
    case 'options': return 'Object';
    case 'args': return 'Array.<*>';
  }
  if (functionName && functionName.toLowerCase().indexOf('deepequal') >= 0) {
    return 'Object';
  }
  if (argName.toLowerCase().indexOf('ctor') >= 0) { return 'Function'; }
  if (argName.toLowerCase().indexOf('stream') >= 0) {
    return 'node.stream.Stream';
  }
  if (argName.toLowerCase().indexOf('length') >= 0 ||
      argName.toLowerCase().indexOf('size') >= 0 ||
      argName.toLowerCase().indexOf('depth') >= 0) {
    return 'number';
  }
  if (argName.indexOf('is') === 0) { return 'boolean'; }

  console.log('Could not "guess" type (assuming "string") for: ' + this.name_ + '.' +
    functionName + '#' + argName);
  return 'string';
};

/**
 * Attempts to work out the description of the specified function
 * @private
 * @param {string} name The name of the function.
 * @param {*} val The actual value of this function.
 * @return {string} The description of this function.
 */
ncnode.lib.processor.prototype.evalFunctionDesc_ = function(name, val) {
  return this.getDocs_(this.name_, name);
};


/**
 * Attempts to work out the description of the specified attribute
 * @private
 * @param {string} name The name of the attribute.
 * @param {*} val The actual value of this attribute.
 * @return {string} The description of this attribute.
 */
ncnode.lib.processor.prototype.evalAttrDesc_ = function(name, val) {
  return this.getDocs_(this.name_, name);
};


/**
 * @private
 * @return {string} The overview of this class parsed from the markdown node
 *    docs.
 */
ncnode.lib.processor.prototype.getClassOverview_ = function() {
  var d = this.getDocs_(this.name_);
  return d;
};


/**
 * @private
 * @param {string} clazz The name of the class whose docs we are after.
 * @param {string=} member The name of the class memeber we are after.
 * @return {string} The docs or null for the specified class and member.
 */
ncnode.lib.processor.prototype.getDocs_ = function(clazz, member) {
  var id = ncnode.lib.gencode.getClassAndMemberID(clazz, member);
  var raw = this.docs_[id];
  return !raw ? raw : raw.replace(/\n/g, '\n * ');
};
