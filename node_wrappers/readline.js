
goog.provide("readline");

/**
 * @param {*} input
 * @param {*} output
 * @param {*} completer
 * @return {*}
 */
readline.prototype.createInterface = function(input, output, completer) {
  return readline.core.createInterface(input, output, completer);
};


readline.core = require("readline");