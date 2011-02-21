
goog.provide("http");

/**
 * @fileoverview To use the HTTP server and client one must `require('http')`.
 *
 * The HTTP interfaces in Node are designed to support many features
 * of the protocol which have been traditionally difficult to use.
 * In particular, large, possibly chunk-encoded, messages. The interface is
 * careful to never buffer entire requests or responses--the
 * user is able to stream data.
 *
 * HTTP message headers are represented by an object like this:
 * <pre>
 *     { 'content-length': '123',
 *       'content-type': 'text&#47;plain',
 *       'connection': 'keep-alive',
 *       'accept': '*&#47;*' }
 * </pre>
 * Keys are lowercased. Values are not modified.
 *
 * In order to support the full spectrum of possible HTTP applications, Node's
 * HTTP API is very low-level. It deals with stream handling and message
 * parsing only. It parses a message into headers and body but it does not
 * parse the actual headers or the body.
 */

/**
 * @type {*}
 */
http.prototype.parsers;

/**
 * @type {*}
 */
http.prototype.STATUS_CODES;

/**
 * @param {*} requestListener
 * @return {*}
 */
http.prototype.createServer = function(requestListener) {
  return http.core.createServer(requestListener);
};

/**
 * @param {*} host
 * @param {*} port
 * @return {*}
 */
http.prototype.getAgent = function(host, port) {
  return http.core.getAgent(host, port);
};

/**
 * @param {*} options
 * @param {*} cb
 * @return {*}
 */
http.prototype.request = function(options, cb) {
  return http.core.request(options, cb);
};

/**
 * @param {*} options
 * @param {*} cb
 * @return {*}
 */
http.prototype.get = function(options, cb) {
  return http.core.get(options, cb);
};

/**
 * @param {*} port
 * @param {*} host
 * @return {*}
 */
http.prototype.createClient = function(port, host) {
  return http.core.createClient(port, host);
};

/**
 * @param {*} url
 * @param {*} encoding_
 * @param {*} headers_
 * @return {*}
 */
http.prototype.cat = function(url, encoding_, headers_) {
  return http.core.cat(url, encoding_, headers_);
};


http.core = require("http");