
goog.provide("console");

/**
 * @return {*}
 */
console.prototype.log = function() {
  return console.core.log();
};

/**
 * @return {*}
 */
console.prototype.info = function() {
  return console.core.info();
};

/**
 * @return {*}
 */
console.prototype.warn = function() {
  return console.core.warn();
};

/**
 * @return {*}
 */
console.prototype.error = function() {
  return console.core.error();
};

/**
 * @param {*} object
 * @return {*}
 */
console.prototype.dir = function(object) {
  return console.core.dir(object);
};

/**
 * @param {*} label
 * @return {*}
 */
console.prototype.time = function(label) {
  return console.core.time(label);
};

/**
 * @param {*} label
 * @return {*}
 */
console.prototype.timeEnd = function(label) {
  return console.core.timeEnd(label);
};

/**
 * @param {*} label
 * @return {*}
 */
console.prototype.trace = function(label) {
  return console.core.trace(label);
};

/**
 * @param {*} expression
 * @return {*}
 */
console.prototype.assert = function(expression) {
  return console.core.assert(expression);
};


console.core = require("console");