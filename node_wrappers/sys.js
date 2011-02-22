
goog.provide("node.sys");

/**
 * @constructor
 * sys
 */
node.sys = function() {};

/**
 * @return {*}
 */
node.sys.prototype.print = function() {
  return node.sys.core_.print();
};

/**
 * @return {*}
 */
node.sys.prototype.puts = function() {
  return node.sys.core_.puts();
};

/**
 * @param {*} x
 * @return {*}
 */
node.sys.prototype.debug = function(x) {
  return node.sys.core_.debug(x);
};

/**
 * @param {*} x
 * @return {*}
 */
node.sys.prototype.error = function(x) {
  return node.sys.core_.error(x);
};

/**
 * @param {*} obj
 * @param {*} showHidden
 * @param {*} depth
 * @param {*} colors
 * @return {*}
 */
node.sys.prototype.inspect = function(obj, showHidden, depth, colors) {
  return node.sys.core_.inspect(obj, showHidden, depth, colors);
};

/**
 * @return {*}
 */
node.sys.prototype.p = function() {
  return node.sys.core_.p();
};

/**
 * @param {*} msg
 * @return {*}
 */
node.sys.prototype.log = function(msg) {
  return node.sys.core_.log(msg);
};

/**
 * @return {*}
 */
node.sys.prototype.exec = function() {
  return node.sys.core_.exec();
};

/**
 * @param {*} readStream
 * @param {*} writeStream
 * @param {*} callback
 * @return {*}
 */
node.sys.prototype.pump = function(readStream, writeStream, callback) {
  return node.sys.core_.pump(readStream, writeStream, callback);
};

/**
 * @param {*} ctor
 * @param {*} superCtor
 * @return {*}
 */
node.sys.prototype.inherits = function(ctor, superCtor) {
  return node.sys.core_.inherits(ctor, superCtor);
};


/**
 * @private
 * @type {*}
 */
node.sys.core_ = require("sys");