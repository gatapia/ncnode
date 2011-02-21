
goog.provide("node.assert.AssertionError");

/**
 * @type {*}
 */
node.assert.AssertionError.prototype.name;

/**
 * @type {*}
 */
node.assert.AssertionError.prototype.message;


/**
 * @private
 * @type {*}
 */
node.assert.AssertionError.core_ = require("assert").AssertionError;