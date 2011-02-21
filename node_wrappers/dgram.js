
goog.provide("dgram");

/**
 * @fileoverview Datagram sockets are available through `require('dgram')`.  Datagrams are most commonly
 * handled as IP&#47;UDP messages but they can also be used over Unix domain sockets.
 */

/**
 * Creates a datagram socket of the specified types.  Valid types are:
 * `udp4`, `udp6`, and `unix_dgram`.
 *
 * Takes an optional callback which is added as a listener for `message` events.
 * @param {*} type
 * @param {*} listener
 * @return {*}
 */
dgram.prototype.createSocket = function(type, listener) {
  return dgram.core.createSocket(type, listener);
};


dgram.core = require("dgram");