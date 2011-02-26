/**
 * @name node.querystring
 * @namespace
 * This module provides utilities for dealing with query strings.
 * It provides the following methods:
 */

goog.provide("node.querystring");

/**
 * @param {string} s
 * @param {string} decodeSpaces
 * @return {string}
 */
node.querystring.prototype.unescapeBuffer = function(s, decodeSpaces) {
  return node.querystring.core_.unescapeBuffer(s, decodeSpaces);
};

/**
 * The unescape function used by <code>querystring.parse</code>,
 * provided so that it could be overridden if necessary.
 * @param {string} s
 * @param {string} decodeSpaces
 * @return {string}
 */
node.querystring.prototype.unescape = function(s, decodeSpaces) {
  return node.querystring.core_.unescape(s, decodeSpaces);
};

/**
 * The escape function used by <code>querystring.stringify</code>,
 * provided so that it could be overridden if necessary.
 * @param {string} str
 * @return {string}
 */
node.querystring.prototype.escape = function(str) {
  return node.querystring.core_.escape(str);
};

/**
 * @param {Object} obj
 * @param {string} sep
 * @param {string} eq
 * @param {string} name
 * @return {string}
 */
node.querystring.prototype.encode = function(obj, sep, eq, name) {
  return node.querystring.core_.encode(obj, sep, eq, name);
};

/**
 * Serialize an object to a query string.
 * Optionally override the default separator and assignment characters.
 *
 * Example:
 * <pre>
 *     querystring.stringify({foo: 'bar'})
 *     &#47;&#47; returns
 *     'foo=bar'
 *
 *     querystring.stringify({foo: 'bar', baz: 'bob'}, ';', ':')
 *     &#47;&#47; returns
 *     'foo:bar;baz:bob'
 * </pre>
 * @param {Object} obj
 * @param {string} sep
 * @param {string} eq
 * @param {string} name
 * @return {string}
 */
node.querystring.prototype.stringify = function(obj, sep, eq, name) {
  return node.querystring.core_.stringify(obj, sep, eq, name);
};

/**
 * @param {string} qs
 * @param {string} sep
 * @param {string} eq
 * @return {string}
 */
node.querystring.prototype.decode = function(qs, sep, eq) {
  return node.querystring.core_.decode(qs, sep, eq);
};

/**
 * Deserialize a query string to an object.
 * Optionally override the default separator and assignment characters.
 *
 * Example:
 * <pre>
 *     querystring.parse('a=b&b=c')
 *     &#47;&#47; returns
 *     { a: 'b', b: 'c' }
 * </pre>
 * @param {string} qs
 * @param {string} sep
 * @param {string} eq
 * @return {string}
 */
node.querystring.prototype.parse = function(qs, sep, eq) {
  return node.querystring.core_.parse(qs, sep, eq);
};


/**
 * @private
 * @type {*}
 */
node.querystring.core_ = require("querystring");