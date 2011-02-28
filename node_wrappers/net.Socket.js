
goog.provide("node.net.Socket");

/**
 * @constructor
 */
node.net.Socket = function() {};


/**
 * @private
 * @type {*}
 */
node.net.Socket.core_ = require("net").Socket;