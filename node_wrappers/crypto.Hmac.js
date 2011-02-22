/**
 * @name node.crypto.Hmac
 * @namespace
 */

goog.provide("node.crypto.Hmac");


/**
 * @private
 * @type {*}
 */
node.crypto.Hmac.core_ = require("crypto").Hmac;