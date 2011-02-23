/**
 * @name node.dgram
 * @namespace
 * Datagram sockets are available through <code class="code prettyprint lang-js">require('dgram')</code>.  Datagrams are most commonly
 * handled as IP&#47;UDP messages but they can also be used over Unix domain sockets.
 */

goog.provide("node.dgram");

/**
 * Creates a datagram socket of the specified types.  Valid types are:
 * <code class="code prettyprint lang-js">udp4</code>, <code class="code prettyprint lang-js">udp6</code>, and <code class="code prettyprint lang-js">unix_dgram</code>.
 *
 * Takes an optional callback which is added as a listener for <code class="code prettyprint lang-js">message</code> events.
 * @param {*} type
 * @param {*} listener
 * @return {*}
 */
node.dgram.prototype.createSocket = function(type, listener) {
  return node.dgram.core_.createSocket(type, listener);
};


/**
 * @private
 * @type {*}
 */
node.dgram.core_ = require("dgram");