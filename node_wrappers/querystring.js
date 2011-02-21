
goog.provide("querystring");

/**
 * @fileoverview This module provides utilities for dealing with query strings.
 * It provides the following methods:
 */

/**
 * @param {*} s
 * @param {*} decodeSpaces
 * @return {*}
 */
querystring.prototype.unescapeBuffer = function(s, decodeSpaces) {
  return querystring.core.unescapeBuffer(s, decodeSpaces);
};

/**
 * The unescape function used by `querystring.parse`,
 * provided so that it could be overridden if necessary.
 * @param {*} s
 * @param {*} decodeSpaces
 * @return {*}
 */
querystring.prototype.unescape = function(s, decodeSpaces) {
  return querystring.core.unescape(s, decodeSpaces);
};

/**
 * The escape function used by `querystring.stringify`,
 * provided so that it could be overridden if necessary.
 * @param {*} str
 * @return {*}
 */
querystring.prototype.escape = function(str) {
  return querystring.core.escape(str);
};

/**
 * @param {*} obj
 * @param {*} sep
 * @param {*} eq
 * @param {*} name
 * @return {*}
 */
querystring.prototype.encode = function(obj, sep, eq, name) {
  return querystring.core.encode(obj, sep, eq, name);
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
 * @param {*} obj
 * @param {*} sep
 * @param {*} eq
 * @param {*} name
 * @return {*}
 */
querystring.prototype.stringify = function(obj, sep, eq, name) {
  return querystring.core.stringify(obj, sep, eq, name);
};

/**
 * @param {*} qs
 * @param {*} sep
 * @param {*} eq
 * @return {*}
 */
querystring.prototype.decode = function(qs, sep, eq) {
  return querystring.core.decode(qs, sep, eq);
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
 * @param {*} qs
 * @param {*} sep
 * @param {*} eq
 * @return {*}
 */
querystring.prototype.parse = function(qs, sep, eq) {
  return querystring.core.parse(qs, sep, eq);
};


querystring.core = require("querystring");