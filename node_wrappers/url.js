
goog.provide("node.url");

/**
 * @fileoverview This module has utilities for URL resolution and parsing.
 * Call `require('url')` to use it.
 *
 * Parsed URL objects have some or all of the following fields, depending on
 * whether or not they exist in the URL string. Any parts that are not in the URL
 * string will not be in the parsed object. Examples are shown for the URL
 *
 * `'http:&#47;&#47;user:pass@host.com:8080&#47;p&#47;a&#47;t&#47;h?query=string#hash'`
 *
 * * `href`: The full URL that was originally parsed.
 *
 *   Example: `'http:&#47;&#47;user:pass@host.com:8080&#47;p&#47;a&#47;t&#47;h?query=string#hash'`
 * * `protocol`: The request protocol.
 *
 *   Example: `'http:'`
 * * `host`: The full host portion of the URL, including port and authentication information.
 *
 *   Example: `'user:pass@host.com:8080'`
 * * `auth`: The authentication information portion of a URL.
 *
 *   Example: `'user:pass'`
 * * `hostname`: Just the hostname portion of the host.
 *
 *   Example: `'host.com'`
 * * `port`: The port number portion of the host.
 *
 *   Example: `'8080'`
 * * `pathname`: The path section of the URL, that comes after the host and before the query, including the initial slash if present.
 *
 *   Example: `'&#47;p&#47;a&#47;t&#47;h'`
 * * `search`: The 'query string' portion of the URL, including the leading question mark.
 *
 *   Example: `'?query=string'`
 * * `query`: Either the 'params' portion of the query string, or a querystring-parsed object.
 *
 *   Example: `'query=string'` or `{'query':'string'}`
 * * `hash`: The 'fragment' portion of the URL including the pound-sign.
 *
 *   Example: `'#hash'`
 *
 * The following methods are provided by the URL module:
 */

/**
 * Take a URL string, and return an object.  Pass `true` as the second argument to also parse
 * the query string using the `querystring` module.
 * @param {*} url
 * @param {*} parseQueryString
 * @param {*} slashesDenoteHost
 * @return {*}
 */
node.url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  return node.url.core_.parse(url, parseQueryString, slashesDenoteHost);
};

/**
 * Take a base URL, and a href URL, and resolve them as a browser would for an anchor tag.
 * @param {*} source
 * @param {*} relative
 * @return {*}
 */
node.url.prototype.resolve = function(source, relative) {
  return node.url.core_.resolve(source, relative);
};

/**
 * @param {*} source
 * @param {*} relative
 * @return {*}
 */
node.url.prototype.resolveObject = function(source, relative) {
  return node.url.core_.resolveObject(source, relative);
};

/**
 * Take a parsed URL object, and return a formatted URL string.
 * @param {*} obj
 * @return {*}
 */
node.url.prototype.format = function(obj) {
  return node.url.core_.format(obj);
};


/**
 * @private
 * @type {*}
 */
node.url.core_ = require("url");