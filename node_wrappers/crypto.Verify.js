
goog.provide("node.crypto.Verify");

/**
 * @constructor
 * crypto.Verify
 */
node.crypto.Verify = function() {};


/**
 * @private
 * @type {*}
 */
node.crypto.Verify.core_ = require("crypto").Verify;