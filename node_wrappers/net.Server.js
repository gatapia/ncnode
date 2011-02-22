/**
 * @name node.net.Server
 * @namespace
 */

goog.provide("node.net.Server");


/**
 * @private
 * @type {*}
 */
node.net.Server.core_ = require("net").Server;