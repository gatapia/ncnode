/**
 * @name node.dgram.Socket
 * @namespace
 */

goog.provide("node.dgram.Socket");


/**
 * @private
 * @type {*}
 */
node.dgram.Socket.core_ = require("dgram").Socket;