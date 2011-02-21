
goog.provide("_debugger");

/**
 * @type {*}
 */
_debugger.prototype.port;

/**
 * @return {*}
 */
_debugger.prototype.start = function() {
  return _debugger.core.start();
};


_debugger.core = require("_debugger");