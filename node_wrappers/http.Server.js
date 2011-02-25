/**
 * @name node.http.Server
 * @namespace
 * This is an <code>EventEmitter</code> with the following events:
 */

goog.provide("node.http.Server");


/**
 * @private
 * @type {*}
 */
node.http.Server.core_ = require("http").Server;