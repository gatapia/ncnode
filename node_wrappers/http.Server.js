
goog.provide("node.http.Server");

/**
 * This is an <code>EventEmitter</code> with the following events:
 * @constructor
 */
node.http.Server = function() {};


/**
 * @private
 * @type {*}
 */
node.http.Server.core_ = require("http").Server;