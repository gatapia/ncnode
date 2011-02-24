/**
 * @name node.assert.AssertionError
 * @namespace
 */

goog.provide("node.assert.AssertionError");

/**
 * @type {[object Object]}
 */
node.assert.AssertionError.prototype.name;

/**
 * @type {[object Object]}
 */
node.assert.AssertionError.prototype.message;


/**
 * @private
 * @type {*}
 */
node.assert.AssertionError.core_ = require("assert").AssertionError;