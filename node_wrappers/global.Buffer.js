/**
 * @name node.global.Buffer
 * @namespace
 */

goog.provide("node.global.Buffer");

/**
 * @type {number}
 */
node.global.Buffer.prototype.poolSize;

/**
 * @param {string} b
 */
node.global.Buffer.prototype.isBuffer = function(b) {
  return node.global.Buffer.core_.isBuffer(b);
};

/**
 *
 */
node.global.Buffer.prototype.byteLength = function() {
  return node.global.Buffer.core_.byteLength();
};


/**
 * @private
 * @type {*}
 */
node.global.Buffer.core_ = global.Buffer;