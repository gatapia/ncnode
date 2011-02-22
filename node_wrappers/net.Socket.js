
goog.provide("node.net.Socket");

/**
 * @constructor
 * net.Socket
 */
node.net.Socket = function() {};


/**
 * @private
 * @type {*}
 */
node.net.Socket.core_ = require("net").Socket;