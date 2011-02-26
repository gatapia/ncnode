/**
 * @name node.readline
 * @namespace
 */

goog.provide("node.readline");

/**
 * @param {string} input
 * @param {string} output
 * @param {string} completer
 * @return {string}
 */
node.readline.prototype.createInterface = function(input, output, completer) {
  return node.readline.core_.createInterface(input, output, completer);
};


/**
 * @private
 * @type {*}
 */
node.readline.core_ = require("readline");