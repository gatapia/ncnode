
goog.provide("Buffer");

/**
 * @type {*}
 */
Buffer.prototype.poolSize;

/**
 * @param {*} b
 * @return {*}
 */
Buffer.prototype.isBuffer = function(b) {
  return Buffer.core.isBuffer(b);
};

/**
 * @return {*}
 */
Buffer.prototype.byteLength = function() {
  return Buffer.core.byteLength();
};


Buffer.core = require("buffer").Buffer;