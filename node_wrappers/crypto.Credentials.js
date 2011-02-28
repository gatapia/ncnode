
goog.provide("node.crypto.Credentials");

/**
 * @constructor
 */
node.crypto.Credentials = function() {};


/**
 * @private
 * @type {*}
 */
node.crypto.Credentials.core_ = require("crypto").Credentials;