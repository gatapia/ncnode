
goog.provide("node.crypto.Hash");

/**
 * @constructor
 * crypto.Hash
 */
node.crypto.Hash = function() {};


/**
 * @private
 * @type {*}
 */
node.crypto.Hash.core_ = require("crypto").Hash;