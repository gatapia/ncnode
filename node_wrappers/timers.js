/**
 * @name node.timers
 * @namespace
 */

goog.provide("node.timers");

/**
 * @param {*} item
 * @return {*}
 */
node.timers.prototype.unenroll = function(item) {
  return node.timers.core_.unenroll(item);
};

/**
 * @param {*} item
 * @param {*} msecs
 * @return {*}
 */
node.timers.prototype.enroll = function(item, msecs) {
  return node.timers.core_.enroll(item, msecs);
};

/**
 * @param {*} item
 * @return {*}
 */
node.timers.prototype.active = function(item) {
  return node.timers.core_.active(item);
};

/**
 * To schedule execution of <code>callback</code> after <code>delay</code> milliseconds. Returns a
 * <code>timeoutId</code> for possible use with <code>clearTimeout()</code>. Optionally, you can
 * also pass arguments to the callback.
 * @param {*} callback
 * @param {*} after
 * @return {*}
 */
node.timers.prototype.setTimeout = function(callback, after) {
  return node.timers.core_.setTimeout(callback, after);
};

/**
 * Prevents a timeout from triggering.
 * @param {*} timer
 * @return {*}
 */
node.timers.prototype.clearTimeout = function(timer) {
  return node.timers.core_.clearTimeout(timer);
};

/**
 * To schedule the repeated execution of <code>callback</code> every <code>delay</code> milliseconds.
 * Returns a <code>intervalId</code> for possible use with <code>clearInterval()</code>. Optionally,
 * you can also pass arguments to the callback.
 * @param {*} callback
 * @param {*} repeat
 * @return {*}
 */
node.timers.prototype.setInterval = function(callback, repeat) {
  return node.timers.core_.setInterval(callback, repeat);
};

/**
 * Stops a interval from triggering.
 * @param {*} timer
 * @return {*}
 */
node.timers.prototype.clearInterval = function(timer) {
  return node.timers.core_.clearInterval(timer);
};


/**
 * @private
 * @type {*}
 */
node.timers.core_ = require("timers");