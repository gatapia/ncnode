/**
 * @name node.crypto.Sign
 * @namespace
 */

goog.provide("node.crypto.Sign");


/**
 * @private
 * @type {*}
 */
node.crypto.Sign.core_ = require("crypto").Sign;