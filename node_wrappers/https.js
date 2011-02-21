
goog.provide("https");

/**
 * @fileoverview HTTPS is the HTTP protocol over TLS&#47;SSL. In Node this is implemented as a
 * separate module.
 */

/**
 * @param {*} opts
 * @param {*} requestListener
 * @return {*}
 */
https.prototype.createServer = function(opts, requestListener) {
  return https.core.createServer(opts, requestListener);
};

/**
 * @param {*} options
 * @return {*}
 */
https.prototype.getAgent = function(options) {
  return https.core.getAgent(options);
};

/**
 * @param {*} options
 * @param {*} cb
 * @return {*}
 */
https.prototype.request = function(options, cb) {
  return https.core.request(options, cb);
};

/**
 * @param {*} options
 * @param {*} cb
 * @return {*}
 */
https.prototype.get = function(options, cb) {
  return https.core.get(options, cb);
};


https.core = require("https");