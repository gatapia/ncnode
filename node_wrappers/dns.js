/**
 * @name node.dns
 * @namespace
 * Use <code class="code prettyprint lang-js">require('dns')</code> to access this module.
 *
 * Here is an example which resolves <code class="code prettyprint lang-js">'www.google.com'</code> then reverse
 * resolves the IP addresses which are returned.
 * <pre class="code prettyprint lang-js">
 *     var dns = require('dns');
 *
 *     dns.resolve4('www.google.com', function (err, addresses) {
 *       if (err) throw err;
 *
 *       console.log('addresses: ' + JSON.stringify(addresses));
 *
 *       addresses.forEach(function (a) {
 *         dns.reverse(a, function (err, domains) {
 *           if (err) {
 *             console.log('reverse for ' + a + ' failed: ' +
 *               err.message);
 *           } else {
 *             console.log('reverse for ' + a + ': ' +
 *               JSON.stringify(domains));
 *           }
 *         });
 *       });
 *     });
 * </pre>
 */

goog.provide("node.dns");

/**
 * @type {[object Object]}
 */
node.dns.prototype.NODATA;

/**
 * @type {[object Object]}
 */
node.dns.prototype.FORMERR;

/**
 * @type {[object Object]}
 */
node.dns.prototype.BADRESP;

/**
 * @type {[object Object]}
 */
node.dns.prototype.NOTFOUND;

/**
 * @type {[object Object]}
 */
node.dns.prototype.BADNAME;

/**
 * @type {[object Object]}
 */
node.dns.prototype.TIMEOUT;

/**
 * @type {[object Object]}
 */
node.dns.prototype.CONNREFUSED;

/**
 * @type {[object Object]}
 */
node.dns.prototype.NOMEM;

/**
 * @type {[object Object]}
 */
node.dns.prototype.DESTRUCTION;

/**
 * @type {[object Object]}
 */
node.dns.prototype.NOTIMP;

/**
 * @type {[object Object]}
 */
node.dns.prototype.EREFUSED;

/**
 * @type {[object Object]}
 */
node.dns.prototype.SERVFAIL;

/**
 * Resolves a domain (e.g. <code class="code prettyprint lang-js">'google.com'</code>) into an array of the record types
 * specified by rrtype. Valid rrtypes are <code class="code prettyprint lang-js">A</code> (IPV4 addresses), <code class="code prettyprint lang-js">AAAA</code> (IPV6
 * addresses), <code class="code prettyprint lang-js">MX</code> (mail exchange records), <code class="code prettyprint lang-js">TXT</code> (text records), <code class="code prettyprint lang-js">SRV</code> (SRV
 * records), and <code class="code prettyprint lang-js">PTR</code> (used for reverse IP lookups).
 *
 * The callback has arguments <code class="code prettyprint lang-js">(err, addresses)</code>.  The type of each item
 * in <code class="code prettyprint lang-js">addresses</code> is determined by the record type, and described in the
 * documentation for the corresponding lookup methods below.
 *
 * On error, <code class="code prettyprint lang-js">err</code> would be an instanceof <code class="code prettyprint lang-js">Error</code> object, where <code class="code prettyprint lang-js">err.errno</code> is
 * one of the error codes listed below and <code class="code prettyprint lang-js">err.message</code> is a string describing
 * the error in English.
 * @param {*} domain
 * @param {*} type_
 * @param {*} callback_
 * @return {*}
 */
node.dns.prototype.resolve = function(domain, type_, callback_) {
  return node.dns.core_.resolve(domain, type_, callback_);
};

/**
 * @param {*} domain
 * @param {*} family/*=4*/
 * @param {*} callback
 * @return {*}
 */
node.dns.prototype.getHostByName = function(domain, family/*=4*/, callback) {
  return node.dns.core_.getHostByName(domain, family/*=4*/, callback);
};

/**
 * @param {*} address
 * @param {*} family/*=4*/
 * @param {*} callback
 * @return {*}
 */
node.dns.prototype.getHostByAddr = function(address, family/*=4*/, callback) {
  return node.dns.core_.getHostByAddr(address, family/*=4*/, callback);
};

/**
 * Resolves a domain (e.g. <code class="code prettyprint lang-js">'google.com'</code>) into the first found A (IPv4) or
 * AAAA (IPv6) record.
 *
 * The callback has arguments <code class="code prettyprint lang-js">(err, address, family)</code>.  The <code class="code prettyprint lang-js">address</code> argument
 * is a string representation of a IP v4 or v6 address. The <code class="code prettyprint lang-js">family</code> argument
 * is either the integer 4 or 6 and denotes the family of <code class="code prettyprint lang-js">address</code> (not
 * neccessarily the value initially passed to <code class="code prettyprint lang-js">lookup</code>).
 * @param {*} domain
 * @param {*} family
 * @param {*} callback
 * @return {*}
 */
node.dns.prototype.lookup = function(domain, family, callback) {
  return node.dns.core_.lookup(domain, family, callback);
};

/**
 * The same as <code class="code prettyprint lang-js">dns.resolve()</code>, but only for IPv4 queries (<code class="code prettyprint lang-js">A</code> records).
 * <code class="code prettyprint lang-js">addresses</code> is an array of IPv4 addresses (e.g.
 * <code class="code prettyprint lang-js">['74.125.79.104', '74.125.79.105', '74.125.79.106']</code>).
 * @param {*} domain
 * @param {*} callback
 * @return {*}
 */
node.dns.prototype.resolve4 = function(domain, callback) {
  return node.dns.core_.resolve4(domain, callback);
};

/**
 * The same as <code class="code prettyprint lang-js">dns.resolve4()</code> except for IPv6 queries (an <code class="code prettyprint lang-js">AAAA</code> query).
 * @param {*} domain
 * @param {*} callback
 * @return {*}
 */
node.dns.prototype.resolve6 = function(domain, callback) {
  return node.dns.core_.resolve6(domain, callback);
};

/**
 * The same as <code class="code prettyprint lang-js">dns.resolve()</code>, but only for mail exchange queries (<code class="code prettyprint lang-js">MX</code> records).
 *
 * <code class="code prettyprint lang-js">addresses</code> is an array of MX records, each with a priority and an exchange
 * attribute (e.g. <code class="code prettyprint lang-js">[{'priority': 10, 'exchange': 'mx.example.com'},...]</code>).
 * @param {*} domain
 * @param {*} callback
 * @return {*}
 */
node.dns.prototype.resolveMx = function(domain, callback) {
  return node.dns.core_.resolveMx(domain, callback);
};

/**
 * The same as <code class="code prettyprint lang-js">dns.resolve()</code>, but only for text queries (<code class="code prettyprint lang-js">TXT</code> records).
 * <code class="code prettyprint lang-js">addresses</code> is an array of the text records available for <code class="code prettyprint lang-js">domain</code> (e.g.,
 * <code class="code prettyprint lang-js">['v=spf1 ip4:0.0.0.0 ~all']</code>).
 * @param {*} domain
 * @param {*} callback
 * @return {*}
 */
node.dns.prototype.resolveTxt = function(domain, callback) {
  return node.dns.core_.resolveTxt(domain, callback);
};

/**
 * The same as <code class="code prettyprint lang-js">dns.resolve()</code>, but only for service records (<code class="code prettyprint lang-js">SRV</code> records).
 * <code class="code prettyprint lang-js">addresses</code> is an array of the SRV records available for <code class="code prettyprint lang-js">domain</code>. Properties
 * of SRV records are priority, weight, port, and name (e.g.,
 * <code class="code prettyprint lang-js">[{'priority': 10, {'weight': 5, 'port': 21223, 'name': 'service.example.com'}, ...]</code>).
 * @param {*} domain
 * @param {*} callback
 * @return {*}
 */
node.dns.prototype.resolveSrv = function(domain, callback) {
  return node.dns.core_.resolveSrv(domain, callback);
};

/**
 * Reverse resolves an ip address to an array of domain names.
 *
 * The callback has arguments <code class="code prettyprint lang-js">(err, domains)</code>.
 *
 * If there an an error, <code class="code prettyprint lang-js">err</code> will be non-null and an instanceof the Error
 * object.
 *
 * Each DNS query can return an error code.
 *
 * - <code class="code prettyprint lang-js">dns.TEMPFAIL</code>: timeout, SERVFAIL or similar.
 * - <code class="code prettyprint lang-js">dns.PROTOCOL</code>: got garbled reply.
 * - <code class="code prettyprint lang-js">dns.NXDOMAIN</code>: domain does not exists.
 * - <code class="code prettyprint lang-js">dns.NODATA</code>: domain exists but no data of reqd type.
 * - <code class="code prettyprint lang-js">dns.NOMEM</code>: out of memory while processing.
 * - <code class="code prettyprint lang-js">dns.BADQUERY</code>: the query is malformed.
 * @param {*} domain
 * @param {*} callback
 * @return {*}
 */
node.dns.prototype.reverse = function(domain, callback) {
  return node.dns.core_.reverse(domain, callback);
};

/**
 * @param {*} domain
 * @param {*} callback
 * @return {*}
 */
node.dns.prototype.resolveNs = function(domain, callback) {
  return node.dns.core_.resolveNs(domain, callback);
};

/**
 * @param {*} domain
 * @param {*} callback
 * @return {*}
 */
node.dns.prototype.resolveCname = function(domain, callback) {
  return node.dns.core_.resolveCname(domain, callback);
};


/**
 * @private
 * @type {*}
 */
node.dns.core_ = require("dns");