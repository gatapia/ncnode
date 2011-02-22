
goog.provide("node.net.Server");

/**
 * @constructor
 * net.Server
 */
node.net.Server = function() {};


/**
 * @private
 * @type {*}
 */
node.net.Server.core_ = require("net").Server;