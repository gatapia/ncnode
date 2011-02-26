/**
 * @name node.https
 * @namespace
 * HTTPS is the HTTP protocol over TLS&#47;SSL. In Node this is implemented as a
 * separate module.
 */

goog.provide("node.https");

/**
 * @param {string} opts
 * @param {string} requestListener
 * @return {string}
 */
node.https.prototype.createServer = function(opts, requestListener) {
  return node.https.core_.createServer(opts, requestListener);
};

/**
 * @param {Object} options
 * @return {string}
 */
node.https.prototype.getAgent = function(options) {
  return node.https.core_.getAgent(options);
};

/**
 * @param {Object} options
 * @param {string} cb
 * @return {string}
 */
node.https.prototype.request = function(options, cb) {
  return node.https.core_.request(options, cb);
};

/**
 * @param {Object} options
 * @param {string} cb
 * @return {string}
 */
node.https.prototype.get = function(options, cb) {
  return node.https.core_.get(options, cb);
};


/**
 * @private
 * @type {*}
 */
node.https.core_ = require("https");