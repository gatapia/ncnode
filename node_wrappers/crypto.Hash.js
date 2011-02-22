/**
 * @name node.crypto.Hash
 * @namespace
 */

goog.provide("node.crypto.Hash");


/**
 * @private
 * @type {*}
 */
node.crypto.Hash.core_ = require("crypto").Hash;