
var fs = require('fs'),
    path = require('path'),
    script = process.binding('evals').Script;

goog.provide('ncnode.lib.processor');

goog.require('goog.array');

ncnode.lib.processor = function(name, obj, doc) {
  this.name_ =  name;
  this.obj_ =  obj;
  this.doc_ =  doc;
  this.desc_;
};

ncnode.lib.processor.prototype.process = function() {
  this.desc_ = new ncnode.lib.class(this.name_);
  for (var i in this.obj_) {
    console.log(i);
  };
};