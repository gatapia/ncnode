/**
 * @name node.url
 * @namespace
 * This module has utilities for URL resolution and parsing.
 * Call <code class="code prettyprint lang-js">require('url')</code> to use it.
 *
 * Parsed URL objects have some or all of the following fields, depending on
 * whether or not they exist in the URL string. Any parts that are not in the URL
 * string will not be in the parsed object. Examples are shown for the URL
 *
 * <code class="code prettyprint lang-js">'http:&#47;&#47;user:pass@host.com:8080&#47;p&#47;a&#47;t&#47;h?query=string#hash'</code>
 *
 * * <code class="code prettyprint lang-js">href</code>: The full URL that was originally parsed.
 *
 *   Example: <code class="code prettyprint lang-js">'http:&#47;&#47;user:pass@host.com:8080&#47;p&#47;a&#47;t&#47;h?query=string#hash'</code>
 * * <code class="code prettyprint lang-js">protocol</code>: The request protocol.
 *
 *   Example: <code class="code prettyprint lang-js">'http:'</code>
 * * <code class="code prettyprint lang-js">host</code>: The full host portion of the URL, including port and authentication information.
 *
 *   Example: <code class="code prettyprint lang-js">'user:pass@host.com:8080'</code>
 * * <code class="code prettyprint lang-js">auth</code>: The authentication information portion of a URL.
 *
 *   Example: <code class="code prettyprint lang-js">'user:pass'</code>
 * * <code class="code prettyprint lang-js">hostname</code>: Just the hostname portion of the host.
 *
 *   Example: <code class="code prettyprint lang-js">'host.com'</code>
 * * <code class="code prettyprint lang-js">port</code>: The port number portion of the host.
 *
 *   Example: <code class="code prettyprint lang-js">'8080'</code>
 * * <code class="code prettyprint lang-js">pathname</code>: The path section of the URL, that comes after the host and before the query, including the initial slash if present.
 *
 *   Example: <code class="code prettyprint lang-js">'&#47;p&#47;a&#47;t&#47;h'</code>
 * * <code class="code prettyprint lang-js">search</code>: The 'query string' portion of the URL, including the leading question mark.
 *
 *   Example: <code class="code prettyprint lang-js">'?query=string'</code>
 * * <code class="code prettyprint lang-js">query</code>: Either the 'params' portion of the query string, or a querystring-parsed object.
 *
 *   Example: <code class="code prettyprint lang-js">'query=string'</code> or <code class="code prettyprint lang-js">{'query':'string'}</code>
 * * <code class="code prettyprint lang-js">hash</code>: The 'fragment' portion of the URL including the pound-sign.
 *
 *   Example: <code class="code prettyprint lang-js">'#hash'</code>
 *
 * The following methods are provided by the URL module:
 */

goog.provide("node.url");

/**
 * Take a URL string, and return an object.  Pass <code class="code prettyprint lang-js">true</code> as the second argument to also parse
 * the query string using the <code class="code prettyprint lang-js">querystring</code> module.
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