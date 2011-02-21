
goog.provide("node.https");

/**
 * @fileoverview HTTPS is the HTTP protocol over TLS&#47;SSL. In Node this is implemented as a
 * separate module.
 */

/**
 * @param {*} opts
 * @param {*} requestListener
 * @return {*}
 */
node.https.prototype.createServer = function(opts, requestListener) {
  return node.https.core_.createServer(opts, requestListener);
};

/**
 * @param {*} options
 * @return {*}
 */
node.https.prototype.getAgent = function(options) {
  return node.https.core_.getAgent(options);
};

/**
 * @param {*} options
 * @param {*} cb
 * @return {*}
 */
node.https.prototype.request = function(options, cb) {
  return node.https.core_.request(options, cb);
};

/**
 * @param {*} options
 * @param {*} cb
 * @return {*}
 */
node.https.prototype.get = function(options, cb) {
  return node.https.core_.get(options, cb);
};


/**
 * @private
 * @type {*}
 */
node.https.core_ = require("https");