
goog.provide("node.crypto.Cipher");

/**
 * @constructor
 */
node.crypto.Cipher = function() {};


/**
 * @private
 * @type {*}
 */
node.crypto.Cipher.core_ = require("crypto").Cipher;