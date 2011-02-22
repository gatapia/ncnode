
goog.provide("node.buffer.Buffer");

/**
 * @constructor
 * buffer.Buffer
 */
node.buffer.Buffer = function() {};

/**
 * @type {*}
 */
node.buffer.Buffer.prototype.poolSize;

/**
 * @param {*} b
 * @return {*}
 */
node.buffer.Buffer.prototype.isBuffer = function(b) {
  return node.buffer.Buffer.core_.isBuffer(b);
};

/**
 * @return {*}
 */
node.buffer.Buffer.prototype.byteLength = function() {
  return node.buffer.Buffer.core_.byteLength();
};


/**
 * @private
 * @type {*}
 */
node.buffer.Buffer.core_ = require("buffer").Buffer;