
goog.provide("sys");

/**
 * @return {*}
 */
sys.prototype.print = function() {
  return sys.core.print();
};

/**
 * @return {*}
 */
sys.prototype.puts = function() {
  return sys.core.puts();
};

/**
 * @param {*} x
 * @return {*}
 */
sys.prototype.debug = function(x) {
  return sys.core.debug(x);
};

/**
 * @param {*} x
 * @return {*}
 */
sys.prototype.error = function(x) {
  return sys.core.error(x);
};

/**
 * @param {*} obj
 * @param {*} showHidden
 * @param {*} depth
 * @param {*} colors
 * @return {*}
 */
sys.prototype.inspect = function(obj, showHidden, depth, colors) {
  return sys.core.inspect(obj, showHidden, depth, colors);
};

/**
 * @return {*}
 */
sys.prototype.p = function() {
  return sys.core.p();
};

/**
 * @param {*} msg
 * @return {*}
 */
sys.prototype.log = function(msg) {
  return sys.core.log(msg);
};

/**
 * @return {*}
 */
sys.prototype.exec = function() {
  return sys.core.exec();
};

/**
 * @param {*} readStream
 * @param {*} writeStream
 * @param {*} callback
 * @return {*}
 */
sys.prototype.pump = function(readStream, writeStream, callback) {
  return sys.core.pump(readStream, writeStream, callback);
};

/**
 * @param {*} ctor
 * @param {*} superCtor
 * @return {*}
 */
sys.prototype.inherits = function(ctor, superCtor) {
  return sys.core.inherits(ctor, superCtor);
};


sys.core = require("sys");