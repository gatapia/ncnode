
goog.provide("node._debugger");

/**
 * @type {*}
 */
node._debugger.prototype.port;

/**
 * @return {*}
 */
node._debugger.prototype.start = function() {
  return node._debugger.core_.start();
};


/**
 * @private
 * @type {*}
 */
node._debugger.core_ = require("_debugger");