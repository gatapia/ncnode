
goog.provide("SlowBuffer");

/**
 * @return {*}
 */
SlowBuffer.prototype.byteLength = function() {
  return SlowBuffer.core.byteLength();
};

/**
 * @return {*}
 */
SlowBuffer.prototype.makeFastBuffer = function() {
  return SlowBuffer.core.makeFastBuffer();
};


SlowBuffer.core = require("buffer").SlowBuffer;