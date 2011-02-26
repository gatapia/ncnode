/**
 * @name node.sys
 * @namespace
 */

goog.provide("node.sys");

/**
 * @return {string}
 */
node.sys.prototype.print = function() {
  return node.sys.core_.print();
};

/**
 * @return {string}
 */
node.sys.prototype.puts = function() {
  return node.sys.core_.puts();
};

/**
 * @param {string} x
 * @return {string}
 */
node.sys.prototype.debug = function(x) {
  return node.sys.core_.debug(x);
};

/**
 * @param {string} x
 * @return {string}
 */
node.sys.prototype.error = function(x) {
  return node.sys.core_.error(x);
};

/**
 * @param {Object} obj
 * @param {string} showHidden
 * @param {string} depth
 * @param {string} colors
 * @return {string}
 */
node.sys.prototype.inspect = function(obj, showHidden, depth, colors) {
  return node.sys.core_.inspect(obj, showHidden, depth, colors);
};

/**
 * @return {string}
 */
node.sys.prototype.p = function() {
  return node.sys.core_.p();
};

/**
 * @param {string} msg
 * @return {string}
 */
node.sys.prototype.log = function(msg) {
  return node.sys.core_.log(msg);
};

/**
 * @return {string}
 */
node.sys.prototype.exec = function() {
  return node.sys.core_.exec();
};

/**
 * @param {node.stream.Stream} readStream
 * @param {node.stream.Stream} writeStream
 * @param {function(Error=,} callback ...*):undefined
 * @return {string}
 */
node.sys.prototype.pump = function(readStream, writeStream, callback) {
  return node.sys.core_.pump(readStream, writeStream, callback);
};

/**
 * @param {Function} ctor
 * @param {Function} superCtor
 * @return {string}
 */
node.sys.prototype.inherits = function(ctor, superCtor) {
  return node.sys.core_.inherits(ctor, superCtor);
};


/**
 * @private
 * @type {*}
 */
node.sys.core_ = require("sys");