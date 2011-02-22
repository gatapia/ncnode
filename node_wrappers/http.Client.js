
goog.provide("node.http.Client");

/**
 * @constructor
 * http.Client
 */
node.http.Client = function() {};


/**
 * @private
 * @type {*}
 */
node.http.Client.core_ = require("http").Client;