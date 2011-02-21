
goog.provide("net");

/**
 * @fileoverview The `net` module provides you with an asynchronous network wrapper. It contains
 * methods for creating both servers and clients (called streams). You can include
 * this module with `require("net");`
 */

/**
 * #### net.isIP(input)
 *
 * Tests if input is an IP address. Returns 0 for invalid strings,
 * returns 4 for IP version 4 addresses, and returns 6 for IP version 6 addresses.
 *
 *
 * #### net.isIPv4(input)
 *
 * Returns true if input is a version 4 IP address, otherwise returns false.
 *
 *
 * #### net.isIPv6(input)
 *
 * Returns true if input is a version 6 IP address, otherwise returns false.
 * @return {*}
 */
net.prototype.isIP = function() {
  return net.core.isIP();
};

/**
 * @param {*} input
 * @return {*}
 */
net.prototype.isIPv4 = function(input) {
  return net.core.isIPv4(input);
};

/**
 * @param {*} input
 * @return {*}
 */
net.prototype.isIPv6 = function(input) {
  return net.core.isIPv6(input);
};

/**
 * Construct a new socket object and opens a socket to the given location. When
 * the socket is established the `'connect'` event will be emitted.
 *
 * The arguments for this method change the type of connection:
 *
 * * `net.createConnection(port, [host])`
 *
 *   Creates a TCP connection to `port` on `host`. If `host` is omitted, `localhost`
 *   will be assumed.
 *
 * * `net.createConnection(path)`
 *
 *   Creates unix socket connection to `path`
 *
 * ---
 * @param {*} port
 * @param {*} host
 * @return {*}
 */
net.prototype.createConnection = function(port, host) {
  return net.core.createConnection(port, host);
};

/**
 * Creates a new TCP server. The `connectionListener` argument is
 * automatically set as a listener for the `'connection'` event.
 * @return {*}
 */
net.prototype.createServer = function() {
  return net.core.createServer();
};


net.core = require("net");