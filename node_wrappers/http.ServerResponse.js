
goog.provide("node.http.ServerResponse");

/**
 * @fileoverview This object is created internally by a HTTP server--not by the user. It is
 * passed as the second parameter to the `'request'` event. It is a `Writable Stream`.
 */

/**
 * @constructor
 * http.ServerResponse
 */
node.http.ServerResponse = function() {};


/**
 * @private
 * @type {*}
 */
node.http.ServerResponse.core_ = require("http").ServerResponse;