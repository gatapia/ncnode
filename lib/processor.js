
goog.provide('ncnode.lib.processor');

goog.require('goog.array');

goog.require('ncnode.lib.clazz');
goog.require('ncnode.lib.type');


/**
 * @constructor
 * @param {string} name The name of the object/file we are processing
 * @param {Object} obj An instance of the node object to scrutinize
 * @param {String} doc The documentation content for this type
 */
ncnode.lib.processor = function(name, obj, doc) {
  this.name_ =  name;
  this.obj_ =  obj;
  this.doc_ =  doc;

  /**
   * @private
   * @type {string}
   */
  this.desc_;
};

/**
 */
ncnode.lib.processor.prototype.process = function() {
  var c = new ncnode.lib.clazz(this.name_);
  for (var i in this.obj_) {
    console.log(i);
  };
  this.desc_ = c.toString();
};