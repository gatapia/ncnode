
goog.provide("node.crypto.Credentials");

/**
 * @constructor
 * crypto.Credentials
 */
node.crypto.Credentials = function() {};


/**
 * @private
 * @type {*}
 */
node.crypto.Credentials.core_ = require("crypto").Credentials;