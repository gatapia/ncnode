/**
 * @name node.global.Buffer
 * @namespace
 */

goog.provide("node.global.Buffer");

/**
 * @type {string}
 */
node.global.Buffer.prototype.poolSize;

/**
 * @param {string} b
 * @return {string}
 */
node.global.Buffer.prototype.isBuffer = function(b) {
  return node.global.Buffer.core_.isBuffer(b);
};

/**
 * @return {string}
 */
node.global.Buffer.prototype.byteLength = function() {
  return node.global.Buffer.core_.byteLength();
};


/**
 * @private
 * @type {*}
 */
node.global.Buffer.core_ = global.Buffer;