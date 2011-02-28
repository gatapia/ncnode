
goog.provide("node.crypto.Decipher");

/**
 * @constructor
 */
node.crypto.Decipher = function() {};


/**
 * @private
 * @type {*}
 */
node.crypto.Decipher.core_ = require("crypto").Decipher;