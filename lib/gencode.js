#!/usr/local/bin/node

var fs = require('fs'),
    path = require('path'),
    script = process.binding('evals').Script;

require('nclosure').nclosure();

goog.provide('ncnode.lib.gencode');

goog.require('goog.array');
goog.require('ncnode.lib.processor');

ncnode.lib.gencode = function() {
  this.allLibFiles_ = this.getAllLibFiles_();
  this.allMarkdownFiles_ = this.getAllMarkdownFiles_();
  this.processFiles_();
};

ncnode.lib.gencode.NODE_DIR = '../../lib/node/';
ncnode.lib.gencode.NODE_LIB_DIR = ncnode.lib.gencode.NODE_DIR + 'lib/';
ncnode.lib.gencode.NODE_DOC_DIR = ncnode.lib.gencode.NODE_DIR + 'doc/api/';

ncnode.lib.gencode.prototype.processFiles_ = function() {
  process.chdir(ncnode.lib.gencode.NODE_DIR);
  this.allLibFiles_.slice(0, 1);
  goog.array.forEach(this.allLibFiles_, this.processJSFile_, this);
};

ncnode.lib.gencode.prototype.processJSFile_ = function(f) {
  var js = fs.readFileSync('lib/' + f);
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
  try { script.runInNewContext(js, ctx, f); }
  catch (ex) { console.error('Not parsing: ' + f + ' ex: ' + ex.message); };

  new ncnode.lib.processor(f, ctx, null).process();
};

ncnode.lib.gencode.prototype.getAllLibFiles_ = function() {
  return fs.readdirSync(ncnode.lib.gencode.NODE_LIB_DIR);
};

ncnode.lib.gencode.prototype.getAllMarkdownFiles_ = function() {
  return fs.readdirSync(ncnode.lib.gencode.NODE_DOC_DIR);
};

new ncnode.lib.gencode();