
goog.provide("node.global.Buffer");

/**
 * @type {*}
 */
node.global.Buffer.prototype.poolSize;

/**
 * @param {*} b
 * @return {*}
 */
node.global.Buffer.prototype.isBuffer = function(b) {
  return node.global.Buffer.core_.isBuffer(b);
};

/**
 * @return {*}
 */
node.global.Buffer.prototype.byteLength = function() {
  return node.global.Buffer.core_.byteLength();
};


/**
 * @private
 * @type {*}
 */
node.global.Buffer.core_ = global.Buffer;