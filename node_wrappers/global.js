/**
 * @name node.global
 * @namespace
 * These object are available in the global scope and can be accessed from anywhere.
 */

goog.provide("node.global");

/**
 * @type {string}
 */
node.global.prototype.global;

/**
 * @type {string}
 */
node.global.prototype.process;

/**
 * @type {string}
 */
node.global.prototype.GLOBAL;

/**
 * @type {string}
 */
node.global.prototype.root;

/**
 * @type {string}
 */
node.global.prototype.console;

/**
 * @type {string}
 */
node.global.prototype.nclosure;

/**
 * @type {string}
 */
node.global.prototype.opts;

/**
 * @type {string}
 */
node.global.prototype.COMPILED;

/**
 * @type {string}
 */
node.global.prototype.goog;

/**
 * @type {string}
 */
node.global.prototype.top;

/**
 * @type {string}
 */
node.global.prototype.window;

/**
 * @type {string}
 */
node.global.prototype.ncnode;

/**
 *
 */
node.global.prototype.DTRACE_NET_SERVER_CONNECTION = function() {
  return node.global.core_.DTRACE_NET_SERVER_CONNECTION();
};

/**
 *
 */
node.global.prototype.DTRACE_NET_STREAM_END = function() {
  return node.global.core_.DTRACE_NET_STREAM_END();
};

/**
 *
 */
node.global.prototype.DTRACE_HTTP_SERVER_REQUEST = function() {
  return node.global.core_.DTRACE_HTTP_SERVER_REQUEST();
};

/**
 *
 */
node.global.prototype.DTRACE_HTTP_SERVER_RESPONSE = function() {
  return node.global.core_.DTRACE_HTTP_SERVER_RESPONSE();
};

/**
 *
 */
node.global.prototype.setTimeout = function() {
  return node.global.core_.setTimeout();
};

/**
 *
 */
node.global.prototype.setInterval = function() {
  return node.global.core_.setInterval();
};

/**
 *
 */
node.global.prototype.clearTimeout = function() {
  return node.global.core_.clearTimeout();
};

/**
 *
 */
node.global.prototype.clearInterval = function() {
  return node.global.core_.clearInterval();
};

/**
 * @param {string} path
 */
node.global.prototype.require = function(path) {
  return node.global.core_.require(path);
};


/**
 * @private
 * @type {*}
 */
node.global.core_ = global;