/**
 * @name node.dns
 * @namespace
 * Use `require('dns')` to access this module.
 *
 * Here is an example which resolves `'www.google.com'` then reverse
 * resolves the IP addresses which are returned.
 * <pre>
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
 * @type {*}
 */
node.dns.prototype.NODATA;

/**
 * @type {*}
 */
node.dns.prototype.FORMERR;

/**
 * @type {*}
 */
node.dns.prototype.BADRESP;

/**
 * @type {*}
 */
node.dns.prototype.NOTFOUND;

/**
 * @type {*}
 */
node.dns.prototype.BADNAME;

/**
 * @type {*}
 */
node.dns.prototype.TIMEOUT;

/**
 * @type {*}
 */
node.dns.prototype.CONNREFUSED;

/**
 * @type {*}
 */
node.dns.prototype.NOMEM;

/**
 * @type {*}
 */
node.dns.prototype.DESTRUCTION;

/**
 * @type {*}
 */
node.dns.prototype.NOTIMP;

/**
 * @type {*}
 */
node.dns.prototype.EREFUSED;

/**
 * @type {*}
 */
node.dns.prototype.SERVFAIL;

/**
 * Resolves a domain (e.g. `'google.com'`) into an array of the record types
 * specified by rrtype. Valid rrtypes are `A` (IPV4 addresses), `AAAA` (IPV6
 * addresses), `MX` (mail exchange records), `TXT` (text records), `SRV` (SRV
 * records), and `PTR` (used for reverse IP lookups).
 *
 * The callback has arguments `(err, addresses)`.  The type of each item
 * in `addresses` is determined by the record type, and described in the
 * documentation for the corresponding lookup methods below.
 *
 * On error, `err` would be an instanceof `Error` object, where `err.errno` is
 * one of the error codes listed below and `err.message` is a string describing
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
 * Resolves a domain (e.g. `'google.com'`) into the first found A (IPv4) or
 * AAAA (IPv6) record.
 *
 * The callback has arguments `(err, address, family)`.  The `address` argument
 * is a string representation of a IP v4 or v6 address. The `family` argument
 * is either the integer 4 or 6 and denotes the family of `address` (not
 * neccessarily the value initially passed to `lookup`).
 * @param {*} domain
 * @param {*} family
 * @param {*} callback
 * @return {*}
 */
node.dns.prototype.lookup = function(domain, family, callback) {
  return node.dns.core_.lookup(domain, family, callback);
};

/**
 * The same as `dns.resolve()`, but only for IPv4 queries (`A` records).
 * `addresses` is an array of IPv4 addresses (e.g.
 * `['74.125.79.104', '74.125.79.105', '74.125.79.106']`).
 * @param {*} domain
 * @param {*} callback
 * @return {*}
 */
node.dns.prototype.resolve4 = function(domain, callback) {
  return node.dns.core_.resolve4(domain, callback);
};

/**
 * The same as `dns.resolve4()` except for IPv6 queries (an `AAAA` query).
 * @param {*} domain
 * @param {*} callback
 * @return {*}
 */
node.dns.prototype.resolve6 = function(domain, callback) {
  return node.dns.core_.resolve6(domain, callback);
};

/**
 * The same as `dns.resolve()`, but only for mail exchange queries (`MX` records).
 *
 * `addresses` is an array of MX records, each with a priority and an exchange
 * attribute (e.g. `[{'priority': 10, 'exchange': 'mx.example.com'},...]`).
 * @param {*} domain
 * @param {*} callback
 * @return {*}
 */
node.dns.prototype.resolveMx = function(domain, callback) {
  return node.dns.core_.resolveMx(domain, callback);
};

/**
 * The same as `dns.resolve()`, but only for text queries (`TXT` records).
 * `addresses` is an array of the text records available for `domain` (e.g.,
 * `['v=spf1 ip4:0.0.0.0 ~all']`).
 * @param {*} domain
 * @param {*} callback
 * @return {*}
 */
node.dns.prototype.resolveTxt = function(domain, callback) {
  return node.dns.core_.resolveTxt(domain, callback);
};

/**
 * The same as `dns.resolve()`, but only for service records (`SRV` records).
 * `addresses` is an array of the SRV records available for `domain`. Properties
 * of SRV records are priority, weight, port, and name (e.g.,
 * `[{'priority': 10, {'weight': 5, 'port': 21223, 'name': 'service.example.com'}, ...]`).
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
 * The callback has arguments `(err, domains)`.
 *
 * If there an an error, `err` will be non-null and an instanceof the Error
 * object.
 *
 * Each DNS query can return an error code.
 *
 * - `dns.TEMPFAIL`: timeout, SERVFAIL or similar.
 * - `dns.PROTOCOL`: got garbled reply.
 * - `dns.NXDOMAIN`: domain does not exists.
 * - `dns.NODATA`: domain exists but no data of reqd type.
 * - `dns.NOMEM`: out of memory while processing.
 * - `dns.BADQUERY`: the query is malformed.
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