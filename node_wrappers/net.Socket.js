/**
 * @name node.net.Socket
 * @namespace
 */

goog.provide("node.net.Socket");


/**
 * @private
 * @type {*}
 */
node.net.Socket.core_ = require("net").Socket;