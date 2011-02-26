/**
 * @name node.assert.AssertionError
 * @namespace
 */

goog.provide("node.assert.AssertionError");

/**
 * @type {string}
 */
node.assert.AssertionError.prototype.name;

/**
 * @type {string}
 */
node.assert.AssertionError.prototype.message;


/**
 * @private
 * @type {*}
 */
node.assert.AssertionError.core_ = require("assert").AssertionError;