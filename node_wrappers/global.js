/**
 * @name node.global
 * @namespace
 * These object are available in the global scope and can be accessed from anywhere.
 */

goog.provide("node.global");

/**
 * @type {[object Object]}
 */
node.global.prototype.global;

/**
 * @type {[object Object]}
 */
node.global.prototype.process;

/**
 * @type {[object Object]}
 */
node.global.prototype.GLOBAL;

/**
 * @type {[object Object]}
 */
node.global.prototype.root;

/**
 * @type {[object Object]}
 */
node.global.prototype.console;

/**
 * @type {[object Object]}
 */
node.global.prototype.nclosure;

/**
 * @type {[object Object]}
 */
node.global.prototype.opts;

/**
 * @type {[object Object]}
 */
node.global.prototype.COMPILED;

/**
 * @type {[object Object]}
 */
node.global.prototype.goog;

/**
 * @type {[object Object]}
 */
node.global.prototype.top;

/**
 * @type {[object Object]}
 */
node.global.prototype.window;

/**
 * @type {[object Object]}
 */
node.global.prototype.ncnode;

/**
 * @return {*}
 */
node.global.prototype.DTRACE_NET_SERVER_CONNECTION = function() {
  return node.global.core_.DTRACE_NET_SERVER_CONNECTION();
};

/**
 * @return {*}
 */
node.global.prototype.DTRACE_NET_STREAM_END = function() {
  return node.global.core_.DTRACE_NET_STREAM_END();
};

/**
 * @return {*}
 */
node.global.prototype.DTRACE_HTTP_SERVER_REQUEST = function() {
  return node.global.core_.DTRACE_HTTP_SERVER_REQUEST();
};

/**
 * @return {*}
 */
node.global.prototype.DTRACE_HTTP_SERVER_RESPONSE = function() {
  return node.global.core_.DTRACE_HTTP_SERVER_RESPONSE();
};

/**
 * @return {*}
 */
node.global.prototype.setTimeout = function() {
  return node.global.core_.setTimeout();
};

/**
 * @return {*}
 */
node.global.prototype.setInterval = function() {
  return node.global.core_.setInterval();
};

/**
 * @return {*}
 */
node.global.prototype.clearTimeout = function() {
  return node.global.core_.clearTimeout();
};

/**
 * @return {*}
 */
node.global.prototype.clearInterval = function() {
  return node.global.core_.clearInterval();
};

/**
 * @param {*} path
 * @return {*}
 */
node.global.prototype.require = function(path) {
  return node.global.core_.require(path);
};


/**
 * @private
 * @type {*}
 */
node.global.core_ = global;