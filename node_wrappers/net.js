/**
 * @name node.net
 * @namespace
 * The <code class="code prettyprint lang-js">net</code> module provides you with an asynchronous network wrapper. It contains
 * methods for creating both servers and clients (called streams). You can include
 * this module with <code class="code prettyprint lang-js">require("net");</code>
 */

goog.provide("node.net");

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
node.net.prototype.isIP = function() {
  return node.net.core_.isIP();
};

/**
 * @param {*} input
 * @return {*}
 */
node.net.prototype.isIPv4 = function(input) {
  return node.net.core_.isIPv4(input);
};

/**
 * @param {*} input
 * @return {*}
 */
node.net.prototype.isIPv6 = function(input) {
  return node.net.core_.isIPv6(input);
};

/**
 * Construct a new socket object and opens a socket to the given location. When
 * the socket is established the <code class="code prettyprint lang-js">'connect'</code> event will be emitted.
 *
 * The arguments for this method change the type of connection:
 *
 * * <code class="code prettyprint lang-js">net.createConnection(port, [host])</code>
 *
 *   Creates a TCP connection to <code class="code prettyprint lang-js">port</code> on <code class="code prettyprint lang-js">host</code>. If <code class="code prettyprint lang-js">host</code> is omitted, <code class="code prettyprint lang-js">localhost</code>
 *   will be assumed.
 *
 * * <code class="code prettyprint lang-js">net.createConnection(path)</code>
 *
 *   Creates unix socket connection to <code class="code prettyprint lang-js">path</code>
 *
 * ---
 * @param {*} port
 * @param {*} host
 * @return {*}
 */
node.net.prototype.createConnection = function(port, host) {
  return node.net.core_.createConnection(port, host);
};

/**
 * Creates a new TCP server. The <code class="code prettyprint lang-js">connectionListener</code> argument is
 * automatically set as a listener for the <code class="code prettyprint lang-js">'connection'</code> event.
 * @return {*}
 */
node.net.prototype.createServer = function() {
  return node.net.core_.createServer();
};


/**
 * @private
 * @type {*}
 */
node.net.core_ = require("net");