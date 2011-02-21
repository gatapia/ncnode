
goog.provide("global");

/**
 * @type {*}
 */
global.prototype.global;

/**
 * @type {*}
 */
global.prototype.process;

/**
 * @type {*}
 */
global.prototype.GLOBAL;

/**
 * @type {*}
 */
global.prototype.root;

/**
 * @type {*}
 */
global.prototype.console;

/**
 * @type {*}
 */
global.prototype.nclosure;

/**
 * @type {*}
 */
global.prototype.opts;

/**
 * @type {*}
 */
global.prototype.COMPILED;

/**
 * @type {*}
 */
global.prototype.goog;

/**
 * @type {*}
 */
global.prototype.top;

/**
 * @type {*}
 */
global.prototype.window;

/**
 * @type {*}
 */
global.prototype.ncnode;

/**
 * @return {*}
 */
global.prototype.DTRACE_NET_SERVER_CONNECTION = function() {
  return global.core.DTRACE_NET_SERVER_CONNECTION();
};

/**
 * @return {*}
 */
global.prototype.DTRACE_NET_STREAM_END = function() {
  return global.core.DTRACE_NET_STREAM_END();
};

/**
 * @return {*}
 */
global.prototype.DTRACE_HTTP_SERVER_REQUEST = function() {
  return global.core.DTRACE_HTTP_SERVER_REQUEST();
};

/**
 * @return {*}
 */
global.prototype.DTRACE_HTTP_SERVER_RESPONSE = function() {
  return global.core.DTRACE_HTTP_SERVER_RESPONSE();
};

/**
 * @return {*}
 */
global.prototype.setTimeout = function() {
  return global.core.setTimeout();
};

/**
 * @return {*}
 */
global.prototype.setInterval = function() {
  return global.core.setInterval();
};

/**
 * @return {*}
 */
global.prototype.clearTimeout = function() {
  return global.core.clearTimeout();
};

/**
 * @return {*}
 */
global.prototype.clearInterval = function() {
  return global.core.clearInterval();
};

/**
 * @param {*} path
 * @return {*}
 */
global.prototype.require = function(path) {
  return global.core.require(path);
};


global.core = global;