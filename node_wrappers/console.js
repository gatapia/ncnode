/**
 * @name node.console
 * @namespace
 */

goog.provide("node.console");

/**
 * @return {*}
 */
node.console.prototype.log = function() {
  return node.console.core_.log();
};

/**
 * @return {*}
 */
node.console.prototype.info = function() {
  return node.console.core_.info();
};

/**
 * @return {*}
 */
node.console.prototype.warn = function() {
  return node.console.core_.warn();
};

/**
 * @return {*}
 */
node.console.prototype.error = function() {
  return node.console.core_.error();
};

/**
 * @param {*} object
 * @return {*}
 */
node.console.prototype.dir = function(object) {
  return node.console.core_.dir(object);
};

/**
 * @param {*} label
 * @return {*}
 */
node.console.prototype.time = function(label) {
  return node.console.core_.time(label);
};

/**
 * @param {*} label
 * @return {*}
 */
node.console.prototype.timeEnd = function(label) {
  return node.console.core_.timeEnd(label);
};

/**
 * @param {*} label
 * @return {*}
 */
node.console.prototype.trace = function(label) {
  return node.console.core_.trace(label);
};

/**
 * @param {*} expression
 * @return {*}
 */
node.console.prototype.assert = function(expression) {
  return node.console.core_.assert(expression);
};


/**
 * @private
 * @type {*}
 */
node.console.core_ = require("console");