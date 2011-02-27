/**
 * @name node.sys
 * @namespace
 */

goog.provide("node.sys");

/**
 *
 */
node.sys.prototype.print = function() {
  return node.sys.core_.print();
};

/**
 *
 */
node.sys.prototype.puts = function() {
  return node.sys.core_.puts();
};

/**
 * @param {string} x
 */
node.sys.prototype.debug = function(x) {
  return node.sys.core_.debug(x);
};

/**
 * @param {string} x
 */
node.sys.prototype.error = function(x) {
  return node.sys.core_.error(x);
};

/**
 * @param {Object} obj
 * @param {string} showHidden
 * @param {number} depth
 * @param {string} colors
 */
node.sys.prototype.inspect = function(obj, showHidden, depth, colors) {
  return node.sys.core_.inspect(obj, showHidden, depth, colors);
};

/**
 *
 */
node.sys.prototype.p = function() {
  return node.sys.core_.p();
};

/**
 * @param {string} msg
 */
node.sys.prototype.log = function(msg) {
  return node.sys.core_.log(msg);
};

/**
 *
 */
node.sys.prototype.exec = function() {
  return node.sys.core_.exec();
};

/**
 * @param {node.stream.Stream} readStream
 * @param {node.stream.Stream} writeStream
 * @param {function(Error=,...*):undefined} callback
 */
node.sys.prototype.pump = function(readStream, writeStream, callback) {
  return node.sys.core_.pump(readStream, writeStream, callback);
};

/**
 * @param {Function} ctor
 * @param {Function} superCtor
 */
node.sys.prototype.inherits = function(ctor, superCtor) {
  return node.sys.core_.inherits(ctor, superCtor);
};


/**
 * @private
 * @type {*}
 */
node.sys.core_ = require("sys");