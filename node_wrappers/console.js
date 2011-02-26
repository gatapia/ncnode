/**
 * @name node.console
 * @namespace
 */

goog.provide("node.console");

/**
 * @return {string}
 */
node.console.prototype.log = function() {
  return node.console.core_.log();
};

/**
 * @return {string}
 */
node.console.prototype.info = function() {
  return node.console.core_.info();
};

/**
 * @return {string}
 */
node.console.prototype.warn = function() {
  return node.console.core_.warn();
};

/**
 * @return {string}
 */
node.console.prototype.error = function() {
  return node.console.core_.error();
};

/**
 * @param {string} object
 * @return {string}
 */
node.console.prototype.dir = function(object) {
  return node.console.core_.dir(object);
};

/**
 * @param {string} label
 * @return {string}
 */
node.console.prototype.time = function(label) {
  return node.console.core_.time(label);
};

/**
 * @param {string} label
 * @return {string}
 */
node.console.prototype.timeEnd = function(label) {
  return node.console.core_.timeEnd(label);
};

/**
 * @param {string} label
 * @return {string}
 */
node.console.prototype.trace = function(label) {
  return node.console.core_.trace(label);
};

/**
 * @param {string} expression
 * @return {string}
 */
node.console.prototype.assert = function(expression) {
  return node.console.core_.assert(expression);
};


/**
 * @private
 * @type {*}
 */
node.console.core_ = require("console");