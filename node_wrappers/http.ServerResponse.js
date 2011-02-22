/**
 * @name node.http.ServerResponse
 * @namespace
 * This object is created internally by a HTTP server--not by the user. It is
 * passed as the second parameter to the `'request'` event. It is a `Writable Stream`.
 */

goog.provide("node.http.ServerResponse");


/**
 * @private
 * @type {*}
 */
node.http.ServerResponse.core_ = require("http").ServerResponse;