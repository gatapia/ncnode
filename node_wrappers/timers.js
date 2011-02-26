/**
 * @name node.timers
 * @namespace
 */

goog.provide("node.timers");

/**
 * @param {string} item
 * @return {string}
 */
node.timers.prototype.unenroll = function(item) {
  return node.timers.core_.unenroll(item);
};

/**
 * @param {string} item
 * @param {string} msecs
 * @return {string}
 */
node.timers.prototype.enroll = function(item, msecs) {
  return node.timers.core_.enroll(item, msecs);
};

/**
 * @param {string} item
 * @return {string}
 */
node.timers.prototype.active = function(item) {
  return node.timers.core_.active(item);
};

/**
 * To schedule execution of <code>callback</code> after <code>delay</code> milliseconds. Returns a
 * <code>timeoutId</code> for possible use with <code>clearTimeout()</code>. Optionally, you can
 * also pass arguments to the callback.
 * @param {function(Error=,} callback ...*):undefined
 * @param {string} after
 * @return {string}
 */
node.timers.prototype.setTimeout = function(callback, after) {
  return node.timers.core_.setTimeout(callback, after);
};

/**
 * Prevents a timeout from triggering.
 * @param {string} timer
 * @return {string}
 */
node.timers.prototype.clearTimeout = function(timer) {
  return node.timers.core_.clearTimeout(timer);
};

/**
 * To schedule the repeated execution of <code>callback</code> every <code>delay</code> milliseconds.
 * Returns a <code>intervalId</code> for possible use with <code>clearInterval()</code>. Optionally,
 * you can also pass arguments to the callback.
 * @param {function(Error=,} callback ...*):undefined
 * @param {string} repeat
 * @return {string}
 */
node.timers.prototype.setInterval = function(callback, repeat) {
  return node.timers.core_.setInterval(callback, repeat);
};

/**
 * Stops a interval from triggering.
 * @param {string} timer
 * @return {string}
 */
node.timers.prototype.clearInterval = function(timer) {
  return node.timers.core_.clearInterval(timer);
};


/**
 * @private
 * @type {*}
 */
node.timers.core_ = require("timers");