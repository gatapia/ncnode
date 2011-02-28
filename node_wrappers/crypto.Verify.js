
goog.provide("node.crypto.Verify");

/**
 * @constructor
 */
node.crypto.Verify = function() {};


/**
 * @private
 * @type {*}
 */
node.crypto.Verify.core_ = require("crypto").Verify;