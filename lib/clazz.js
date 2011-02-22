
goog.provide('ncnode.lib.clazz');

goog.require('goog.array');
goog.require('goog.string');

/**
 * @constructor
 * @param {string} name The name of this class
 * @param {string=} overview The fileOvervio of the class
 * @param {Array.<ncnode.lib.type>=} requireNamespaces The namespaces required
 *    by this class
 */
ncnode.lib.clazz = function(name, overview, requireNamespaces) {

  /**
   * @private
   * @type {string}
   */
  this.clazzName_ = name;

  /**
   * @private
   * @type {Array.<string>}
   */
  this.clazzNameParts_ = this.clazzName_.split('.');

  /**
   * @private
   * @type {string}
   */
  this.nodeRequire = 'require("' +
    this.clazzNameParts_[this.clazzNameParts_.length - 1] + '")';

  /**
   * @private
   * @type {string|undefined}
   */
  this.overview_ = overview;

  /**
   * @private
   * @type {Array.<ncnode.lib.type>|undefined}
   */
  this.requireNamespaces_ = requireNamespaces;

  /**
   * @private
   * @type {string}
   */
  this.constructor_= '';

  /**
   * @private
   * @type {Array.<string>}
   */
  this.attributes_ = [];

  /**
   * @private
   * @type {Array.<string>}
   */
  this.functions_ = [];
};

/**
 * @param {string} desc The description of this constructor
 * @param {Array.<ncnode.lib.type>} args Args to this constructor
 * @param {boolean=} priv Wether the constructor is private.
 */
ncnode.lib.clazz.prototype.createConstructor = function(desc, args, priv) {
  if (this.constructor_)
    throw new Error('A class can only have one constructor');
  var jsdoc = ['@constructor'];
  if (priv) jsdoc.push('@private');
  if (desc) jsdoc.push(desc);
  if (args) goog.array.forEach(args, function(t) {
    jsdoc.push(t.toParamString());
  });
  // TODO support function args to constructor
  this.constructor_ = ncnode.lib.clazz.buildJSDoc_(jsdoc) +
    '\n' + this.clazzName_ + ' = function() {};';

};

/**
 * @param {string} type The type of this attribute
 * @param {string} name The attribute name
 * @param {string} desc A description of this attribute
 * @param {boolean} isStatic wether this attribute is a static attribute (or
 *    else a class attribute)
 */
ncnode.lib.clazz.prototype.addAttr = function(type, name, desc, isStatic) {
  var jsdoc = [];
  if (desc) jsdoc.push(desc);
  jsdoc.push('@type {' + type + '}');
  var attr = ncnode.lib.clazz.buildJSDoc_(jsdoc) + '\n' + this.clazzName_;
  if (!isStatic) attr += '.prototype';
  attr += ('.' + name + ';');
  this.attributes_.push(attr);
};

/**
 * @param {string} name The function name
 * @param {string} desc A description of this function
 * @param {Array.<ncnode.lib.type>} args Args to this function
 * @param {string} returnType The return type of this function
 * @param {boolean} isStatic wether this function is a static attribute (or
 *    else a class attribute)
 */
ncnode.lib.clazz.prototype.addFunct =
    function(name, desc, args, returnType, isStatic) {
  var jsdoc = [];
  if (desc) jsdoc.push(desc);
  if (args) goog.array.forEach(args, function(a) {
    jsdoc.push(a.toParamString());
  });
  if (returnType) jsdoc.push('@return {' + returnType + '}');
  var funct = ncnode.lib.clazz.buildJSDoc_(jsdoc) + '\n' + this.clazzName_ + '.';
  if (!isStatic) funct += 'prototype' + '.';
  funct += name + ' = function(';

  if (args) goog.array.forEach(args, function(a, idx) {
    if (idx > 0) funct += ', ';
    funct += a.name;
  });
  funct += ') {\n  return ' + this.clazzName_ + '.core_.' + name + '(';
  if (args) goog.array.forEach(args, function(a, idx) {
    if (idx > 0) funct += ', ';
    funct += a.name;
  });
  funct += ');\n};';
  this.functions_.push(funct);
};

/**
 * @private
 * @param {Array.<string>} parts The lines of this jsdoc
 * @return {string} The jsdoc
 */
ncnode.lib.clazz.buildJSDoc_ = function(parts) {
  return '/**\n * ' + parts.join('\n * ') + '\n */';
};

/**
 * @return {string} The string representation of this class ready to be
 *  written to disc
 */
ncnode.lib.clazz.prototype.toString = function() {
  var buffer = [];
  if (this.clazzName_ === 'node.global') {
    buffer.push(ncnode.lib.clazz.buildJSDoc_(
    ['@name node', '@namespace The core Node.js library jsdoc`ed', '']));
  };
  buffer.push('\ngoog.provide("' + this.clazzName_ +'");\n');
  if (this.overview_) {
    buffer.push(ncnode.lib.clazz.buildJSDoc_(['@fileoverview ' + this.overview_]));
    buffer.push('');
  }

  if(this.constructor_) {
    buffer.push(this.constructor_);
    buffer.push('');
  }

  goog.array.forEach(this.attributes_, function(a) {
    buffer.push(a.toString());
    buffer.push('');
  });
  goog.array.forEach(this.functions_, function(f) {
    buffer.push(f.toString());
    buffer.push('');
  });
  buffer.push(ncnode.lib.clazz.CORE_PREFIX_ + this.clazzName_ +
  '.core_ = ' + this.nodeRequire + ';');
  // Remove all trailing whitespaces
  return goog.array.map(buffer.join('\n').split('\n'), goog.string.trimRight).
    join('\n');
};

/**
 * @private
 * @type {string}
 * const
 */
ncnode.lib.clazz.CORE_PREFIX_ = '\n/**\n * @private\n * @type {*}\n */\n';