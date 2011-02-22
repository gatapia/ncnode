/**
 * @name node.tls.Server
 * @namespace
 */

goog.provide("node.tls.Server");


/**
 * @private
 * @type {*}
 */
node.tls.Server.core_ = require("tls").Server;