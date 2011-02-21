
goog.provide("timers");

/**
 * @param {*} item
 * @return {*}
 */
timers.prototype.unenroll = function(item) {
  return timers.core.unenroll(item);
};

/**
 * @param {*} item
 * @param {*} msecs
 * @return {*}
 */
timers.prototype.enroll = function(item, msecs) {
  return timers.core.enroll(item, msecs);
};

/**
 * @param {*} item
 * @return {*}
 */
timers.prototype.active = function(item) {
  return timers.core.active(item);
};

/**
 * To schedule execution of `callback` after `delay` milliseconds. Returns a
 * `timeoutId` for possible use with `clearTimeout()`. Optionally, you can
 * also pass arguments to the callback.
 * @param {*} callback
 * @param {*} after
 * @return {*}
 */
timers.prototype.setTimeout = function(callback, after) {
  return timers.core.setTimeout(callback, after);
};

/**
 * Prevents a timeout from triggering.
 * @param {*} timer
 * @return {*}
 */
timers.prototype.clearTimeout = function(timer) {
  return timers.core.clearTimeout(timer);
};

/**
 * To schedule the repeated execution of `callback` every `delay` milliseconds.
 * Returns a `intervalId` for possible use with `clearInterval()`. Optionally,
 * you can also pass arguments to the callback.
 * @param {*} callback
 * @param {*} repeat
 * @return {*}
 */
timers.prototype.setInterval = function(callback, repeat) {
  return timers.core.setInterval(callback, repeat);
};

/**
 * Stops a interval from triggering.
 * @param {*} timer
 * @return {*}
 */
timers.prototype.clearInterval = function(timer) {
  return timers.core.clearInterval(timer);
};


timers.core = require("timers");