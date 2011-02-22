/**
 * @name node.buffer.SlowBuffer
 * @namespace
 */

goog.provide("node.buffer.SlowBuffer");

/**
 * @return {*}
 */
node.buffer.SlowBuffer.prototype.byteLength = function() {
  return node.buffer.SlowBuffer.core_.byteLength();
};

/**
 * @return {*}
 */
node.buffer.SlowBuffer.prototype.makeFastBuffer = function() {
  return node.buffer.SlowBuffer.core_.makeFastBuffer();
};


/**
 * @private
 * @type {*}
 */
node.buffer.SlowBuffer.core_ = require("buffer").SlowBuffer;