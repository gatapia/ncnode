
goog.provide("node.readline");

/**
 * @constructor
 * readline
 */
node.readline = function() {};

/**
 * @param {*} input
 * @param {*} output
 * @param {*} completer
 * @return {*}
 */
node.readline.prototype.createInterface = function(input, output, completer) {
  return node.readline.core_.createInterface(input, output, completer);
};


/**
 * @private
 * @type {*}
 */
node.readline.core_ = require("readline");