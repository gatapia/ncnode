
goog.provide("node.dgram.Socket");

/**
 * @constructor
 * dgram.Socket
 */
node.dgram.Socket = function() {};


/**
 * @private
 * @type {*}
 */
node.dgram.Socket.core_ = require("dgram").Socket;