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
  this.fs_ = require('fs'),
  this.path_ = require('path');
  this.allLibFiles_ = this.getAllLibFiles_();
  this.allMarkdownFiles_ = this.getAllMarkdownFiles_();
  this.allDocs_ = this.parseAllDocs_();
  this.processGlobalObjects_();
  this.processFiles_();
};

/**
 * @private
 * @const
 * @type {string}
 */
ncnode.lib.gencode.NODE_DIR = '../../../lib/node/';

/**
 * @private
 * @const
 * @type {string}
 */
ncnode.lib.gencode.NODE_LIB_DIR = ncnode.lib.gencode.NODE_DIR + 'lib/';

/**
 * @private
 * @const
 * @type {string}
 */
ncnode.lib.gencode.NODE_DOC_DIR = ncnode.lib.gencode.NODE_DIR + 'doc/api/';

/**
 * @private
 * @const
 * @type {Object.<*>}
 */
ncnode.lib.gencode.REQUIRED_GLOBALS_ = {
  global:global,
  require:require,
  // exports:exports,
  process:process,
  module:module,
  __filename:__filename,
  __dirname:__dirname
};

/**
 * @private
 */
ncnode.lib.gencode.prototype.processGlobalObjects_ = function() {
  for (var i in ncnode.lib.gencode.REQUIRED_GLOBALS_) {
    var obj = ncnode.lib.gencode.REQUIRED_GLOBALS_[i];
    if (typeof(obj) !== 'object') continue;
    this.processObject_(i, obj, i);
  };
};

/**
 * @private
 */
ncnode.lib.gencode.prototype.processFiles_ = function() {
  // process.chdir(ncnode.lib.gencode.NODE_DIR);
  this.allLibFiles_.slice(0, 1);
  goog.array.forEach(this.allLibFiles_, this.processJSFile_, this);
};

/**
 * @private
 * @param {string} f The filename to read and process
 */
ncnode.lib.gencode.prototype.processJSFile_ = function(f) {
  // if (f.indexOf('http.js') < 0) return; // Testing one file

  var js = this.fs_.readFileSync(ncnode.lib.gencode.NODE_LIB_DIR + f);
  var ctx = goog.object.clone(ncnode.lib.gencode.REQUIRED_GLOBALS_);
  var fileExports = {};
  ctx.exports = fileExports;

  try { process.binding('evals').Script.runInNewContext(js, ctx, f); }
  catch (ex) { console.error('Not parsing: ' + f + ' ex: ' + ex.message); };
  this.processObject_(f, fileExports);
};

/**
 * @private
 * @param {string} name The name of this object
 * @param {Object} obj An instance of this object
 * @param {string=} coreRequires If specified will not use the defaule
 *  require('type') to initialise the node object
 */
ncnode.lib.gencode.prototype.processObject_ =
    function(name, obj, coreRequires) {
  // console.log('processObject_[' + name + ']');
  new ncnode.lib.processor(name, obj, this.allDocs_, coreRequires).process();
};

/**
 * @private
 * @return {Array.<string>}
 */
ncnode.lib.gencode.prototype.getAllLibFiles_ = function() {
  return this.fs_.readdirSync(ncnode.lib.gencode.NODE_LIB_DIR);
};

/**
 * @private
 * @return {Object.<string, string>} The object -> doc map for all objects in
 *    the markdown docs
 */
ncnode.lib.gencode.prototype.parseAllDocs_ = function() {
  var map = {};
  goog.array.forEach(this.allMarkdownFiles_, function(f) {
    var contents = this.fs_.readFileSync(ncnode.lib.gencode.NODE_DOC_DIR + f).
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
 * @param {string} name The name of the file
 * @param {string} contents The markdown to parse for object documentation
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

ncnode.lib.gencode.prototype.formatDocs_ = function (d) {
  // Remove the first line which just has the name
  d = d.substring(d.indexOf('\n')).replace(/\//g, '&#47;');

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

ncnode.lib.gencode.getClassAndMemberID = function(class, member) {
  return class + '.' + (member || '');
};

/**
 * @private
 * @return {Array.<string>}
 */
ncnode.lib.gencode.prototype.getAllMarkdownFiles_ = function() {
  return this.fs_.readdirSync(ncnode.lib.gencode.NODE_DOC_DIR);
};

new ncnode.lib.gencode();