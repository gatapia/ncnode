
goog.provide("node.readline.Interface");

/**
 * @constructor
 * readline.Interface
 */
node.readline.Interface = function() {};


/**
 * @private
 * @type {*}
 */
node.readline.Interface.core_ = require("readline").Interface;