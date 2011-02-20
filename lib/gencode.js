#!/usr/local/bin/node

require('nclosure').nclosure();

goog.provide('ncnode.lib.gencode');

goog.require('goog.array');

goog.require('ncnode.lib.processor');


/**
 * @constructor
 */
ncnode.lib.gencode = function() {
  this.fs_ = require('fs'),
  this.path_ = require('path');
  this.allLibFiles_ = this.getAllLibFiles_();
  this.allMarkdownFiles_ = this.getAllMarkdownFiles_();
  this.processFiles_();
};

/**
 * @private
 * @const
 * @type {string}
 */
ncnode.lib.gencode.NODE_DIR = '../../lib/node/';

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
 */
ncnode.lib.gencode.prototype.processFiles_ = function() {
  process.chdir(ncnode.lib.gencode.NODE_DIR);
  this.allLibFiles_.slice(0, 1);
  goog.array.forEach(this.allLibFiles_, this.processJSFile_, this);
};

/**
 * @private
 * @param {string} f The filename to read and process
 */
ncnode.lib.gencode.prototype.processJSFile_ = function(f) {
  var js = this.fs_.readFileSync('lib/' + f);
  var ctx = {
    global:global,
    require:require,
    exports:exports,
    process:process,
    module:module,
    __filename:__filename,
    __dirname:__dirname
  };
  console.error(f);
  try { process.binding('evals').Script.runInNewContext(js, ctx, f); }
  catch (ex) { console.error('Not parsing: ' + f + ' ex: ' + ex.message); };

  new ncnode.lib.processor(f, ctx, null).process();
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
 * @return {Array.<string>}
 */
ncnode.lib.gencode.prototype.getAllMarkdownFiles_ = function() {
  return this.fs_.readdirSync(ncnode.lib.gencode.NODE_DOC_DIR);
};

new ncnode.lib.gencode();