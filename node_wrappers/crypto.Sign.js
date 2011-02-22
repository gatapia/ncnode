
goog.provide("node.crypto.Sign");

/**
 * @constructor
 * crypto.Sign
 */
node.crypto.Sign = function() {};


/**
 * @private
 * @type {*}
 */
node.crypto.Sign.core_ = require("crypto").Sign;