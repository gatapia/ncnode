
goog.provide("node.crypto.Hmac");

/**
 * @constructor
 * crypto.Hmac
 */
node.crypto.Hmac = function() {};


/**
 * @private
 * @type {*}
 */
node.crypto.Hmac.core_ = require("crypto").Hmac;