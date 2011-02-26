/**
 * @name node.buffer.Buffer
 * @namespace
 */

goog.provide("node.buffer.Buffer");

/**
 * @type {string}
 */
node.buffer.Buffer.prototype.poolSize;

/**
 * @param {string} b
 * @return {string}
 */
node.buffer.Buffer.prototype.isBuffer = function(b) {
  return node.buffer.Buffer.core_.isBuffer(b);
};

/**
 * @return {string}
 */
node.buffer.Buffer.prototype.byteLength = function() {
  return node.buffer.Buffer.core_.byteLength();
};


/**
 * @private
 * @type {*}
 */
node.buffer.Buffer.core_ = require("buffer").Buffer;