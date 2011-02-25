#!/usr/local/bin/node

require('nclosure').nclosure();

goog.provide('ncnode.lib.gencode');

goog.require('goog.array');
goog.require('goog.object');

goog.require('ncnode.lib.processor');



/**
 * @constructor
 */
ncnode.lib.gencode = function() {
  this.allLibFiles_ = this.getAllLibFiles_();
  this.allMarkdownFiles_ = this.getAllMarkdownFiles_();
  this.allDocs_ = this.parseAllDocs_();
  this.allTypeData_ = this.parseAllTypeData_();
  this.processGlobalObjects_();
  this.processFiles_();
};


/**
 * @private
 * @const
 * @type {*}
 */
ncnode.lib.gencode.fs_ = require('fs');


/**
 * @private
 * @const
 * @type {*}
 */
ncnode.lib.gencode.path_ = require('path');


/**
 * @const
 * @type {string}
 */
ncnode.lib.gencode.WRAPPERS_DIR = ncnode.lib.gencode.path_.resolve(
    __dirname, '../node_wrappers');


/**
 * @private
 * @const
 * @type {string}
 */
ncnode.lib.gencode.NODE_DIR_ = ncnode.lib.gencode.path_.resolve(
    __dirname, '../../../lib/node/');


/**
 * @private
 * @const
 * @type {string}
 */
ncnode.lib.gencode.NODE_LIB_DIR_ = ncnode.lib.gencode.NODE_DIR_ + '/lib/';


/**
 * @private
 * @const
 * @type {string}
 */
ncnode.lib.gencode.NODE_DOC_DIR_ = ncnode.lib.gencode.NODE_DIR_ + '/doc/api/';


/**
 * @private
 * @const
 * @type {Object.<Object>}
 */
ncnode.lib.gencode.REQUIRED_GLOBALS_ = {
  global: global,
  require: require,
  process: process,
  module: module,
  __filename: __filename,
  __dirname: __dirname
};


/**
 * @private
 */
ncnode.lib.gencode.prototype.processGlobalObjects_ = function() {
  this.writeDummyDocObjects_('node', this.allDocs_['synopsis.']);

  for (var i in ncnode.lib.gencode.REQUIRED_GLOBALS_) {
    var obj = ncnode.lib.gencode.REQUIRED_GLOBALS_[i];
    if (typeof(obj) !== 'object') continue;

    this.processObject_(i, obj, i,
        i === 'global' ? this.allDocs_['globals.'] : '');
  }
};


/**
 * @private
 * @param {string} name The name of the class to create.
 * @param {string} overview The overview of this mock class.
 */
ncnode.lib.gencode.prototype.writeDummyDocObjects_ = function(name, overview) {
  var dummy = new ncnode.lib.clazz(name);
  dummy.createNamespace(name, overview);
  ncnode.lib.processor.dumpClassFile(name, dummy);
};


/**
 * @private
 */
ncnode.lib.gencode.prototype.processFiles_ = function() {
  // process.chdir(ncnode.lib.gencode.NODE_DIR_);
  this.allLibFiles_.slice(0, 1);
  goog.array.forEach(this.allLibFiles_, this.processJSFile_, this);
};


/**
 * @private
 * @param {string} f The filename to read and process.
 */
ncnode.lib.gencode.prototype.processJSFile_ = function(f) {
  if (f.indexOf('_') === 0) return; // Ignore privates

  var js = ncnode.lib.gencode.fs_.readFileSync(
      ncnode.lib.gencode.NODE_LIB_DIR_ + f);
  var ctx = goog.object.clone(ncnode.lib.gencode.REQUIRED_GLOBALS_);
  var fileExports = {};
  ctx.exports = fileExports;

  try { process.binding('evals').Script.runInNewContext(js, ctx, f); }
  catch (ex) { console.error('Not parsing: ' + f + ' ex: ' + ex.message); }
  this.processObject_(f, fileExports);
};


/**
 * @private
 * @param {string} name The name of this object.
 * @param {Object} obj An instance of this object.
 * @param {string=} coreRequires If specified will not use the defaule
 *  require('type') to initialise the node object.
 * @param {string=} overrideOverview Namespace documentation to override.
 */
ncnode.lib.gencode.prototype.processObject_ =
    function(name, obj, coreRequires, overrideOverview) {
  new ncnode.lib.processor(name, obj, this.allDocs_, this.allTypeData_,
      coreRequires, overrideOverview).process();
};


/**
 * @private
 * @return {Array.<string>} All the core node js files.
 */
ncnode.lib.gencode.prototype.getAllLibFiles_ = function() {
  return ncnode.lib.gencode.fs_.readdirSync(ncnode.lib.gencode.NODE_LIB_DIR_);
};


/**
 * @private
 * @return {Object.<string, string>} The object -> doc map for all objects in
 *    the markdown docs.
 */
ncnode.lib.gencode.prototype.parseAllDocs_ = function() {
  var map = {};
  goog.array.forEach(this.allMarkdownFiles_, function(f) {
    var contents = ncnode.lib.gencode.fs_.readFileSync(
        ncnode.lib.gencode.NODE_DOC_DIR_ + f).
        toString();
    var fileMap = this.parseDocContents_(f, contents);
    for (var i in fileMap) {
      if (i in map) throw new Error(i +
          ' already exists in the objects->documents map');
      map[i] = fileMap[i];
    }
  }, this);
  return map;
};


/**
 * @private
 * @param {string} name The name of the file.
 * @param {string} contents The markdown to parse for object documentation.
 * @return {Object.<string, string>} The object -> doc map for this markdown
 *    contents.
 */
ncnode.lib.gencode.prototype.parseDocContents_ = function(name, contents) {
  var map = {};
  var classes = contents.split(/^##\s/gm);
  name = name.split('.')[0];

  goog.array.forEach(classes, function(c, i) {
    if (!c) return;
    var className = i === 1 ? name : c.substring(0, c.indexOf('\n'));
    var members = c.split(/^###\s/gm);
    goog.array.forEach(members, function(m, i) {
      var mname = m.substring(0, m.indexOf('\n'));
      if (mname.indexOf('*/') >= 0) {
        mname = mname.substring(mname.indexOf('*/') + 1);
      }
      if (mname.indexOf('(') >= 0) {
        mname = mname.substring(0, mname.indexOf('('));
      } if (mname.indexOf('.') >= 0) {
        mname = mname.split('.')[1];
      }
      m = this.formatDocs_(m);
      var id = ncnode.lib.gencode.getClassAndMemberID(
          className, i > 0 ? mname : undefined);
      map[id] = m;
    }, this);
  }, this);
  return map;
};


/**
 * @private
 * @param {string} d The document to format.
 * @return {string} The formatted document.
 */
ncnode.lib.gencode.prototype.formatDocs_ = function(d) {
  // Remove the first line which just has the name
  d = d.substring(d.indexOf('\n')).replace(/\//g, '&#47;');
  d = d.replace(/`([^`]+)`/g,
      '<code>$1</code>');
  d = d.replace(/___([^_]+)___/g, '<em><strong>$1</strong></em>');
  d = d.replace(/__([^_]+)__/g, '<strong>$1</strong>');
  d = d.replace(/_([^_]+)_/g, '<em>$1</em>');
  // TODO: The replace below is very inflexible
  d = d.replace(/\[([^\]]+)\]\(([^\)]+)\)/g, '<a href="node.$2">$1</a>');
  // Put code samples in <pre> tags
  var lines = d.split('\n');
  var incode = false;
  var prev;
  for (var i = 0, len = lines.length; i < len; i++) {
    var l = lines[i];
    if (!incode && l.indexOf('    ') === 0 && prev === '') {
      lines[i - 1] = '<pre>';
      incode = true;
    } else if (incode && l.indexOf('    ') !== 0 && prev === '') {
      lines[i - 1] = '</pre>';
      incode = false;
    }
    prev = l;
  }

  return goog.string.trim(lines.join('\n'));
};


/**
 * @private
 * @return {Object.<string>} All the type data in the typedata.txt file.
 */
ncnode.lib.gencode.prototype.parseAllTypeData_ = function() {
  var contents =
      ncnode.lib.gencode.fs_.readFileSync(__dirname + '/typedata.txt').
      toString().split('\n');
  var parsed = {};
  goog.array.forEach(contents, function(c) {
    if (!c || c.indexOf('#') === 0) return; // Ignore comments
    var idx = c.indexOf('=');
    parsed[c.substring(0, idx)] = c.substring(idx + 1);
  });
  return parsed;
};


/**
 * @param {string} clazz The class name.
 * @param {string=} member The member name.
 * @return {string} The id to uniquely identify the class and the member.
 */
ncnode.lib.gencode.getClassAndMemberID = function(clazz, member) {
  return clazz + '.' + (member || '');
};


/**
 * @private
 * @return {Array.<string>} All the markdown files in the node api dir.
 */
ncnode.lib.gencode.prototype.getAllMarkdownFiles_ = function() {
  return ncnode.lib.gencode.fs_.readdirSync(ncnode.lib.gencode.NODE_DOC_DIR_);
};

new ncnode.lib.gencode();
