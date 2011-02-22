/**
 * @name node.crypto.Cipher
 * @namespace
 */

goog.provide("node.crypto.Cipher");


/**
 * @private
 * @type {*}
 */
node.crypto.Cipher.core_ = require("crypto").Cipher;