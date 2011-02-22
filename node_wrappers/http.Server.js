
goog.provide("node.http.Server");

/**
 * @fileoverview This is an `EventEmitter` with the following events:
 */

/**
 * @constructor
 * http.Server
 */
node.http.Server = function() {};


/**
 * @private
 * @type {*}
 */
node.http.Server.core_ = require("http").Server;