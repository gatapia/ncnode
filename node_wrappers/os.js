/**
 * @name node.os
 * @namespace
 * Use `require('os')` to access this module.
 */

goog.provide("node.os");

/**
 * Returns the hostname of the operating system.
 * @return {*}
 */
node.os.prototype.hostname = function() {
  return node.os.core_.hostname();
};

/**
 * Returns an array containing the 1, 5, and 15 minute load averages.
 * @return {*}
 */
node.os.prototype.loadavg = function() {
  return node.os.core_.loadavg();
};

/**
 * Returns the system uptime in seconds.
 * @return {*}
 */
node.os.prototype.uptime = function() {
  return node.os.core_.uptime();
};

/**
 * Returns the amount of free system memory in bytes.
 * @return {*}
 */
node.os.prototype.freemem = function() {
  return node.os.core_.freemem();
};

/**
 * Returns the total amount of system memory in bytes.
 * @return {*}
 */
node.os.prototype.totalmem = function() {
  return node.os.core_.totalmem();
};

/**
 * Returns an array of objects containing information about each CPU&#47;core installed: model, speed (in MHz), and times (an object containing the number of CPU ticks spent in: user, nice, sys, idle, and irq).
 *
 * Example inspection of os.cpus:
 * <pre class="code prettyprint lang-js">
 *     [ { model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
 *         speed: 2926,
 *         times:
 *          { user: 252020,
 *            nice: 0,
 *            sys: 30340,
 *            idle: 1070356870,
 *            irq: 0 } },
 *       { model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
 *         speed: 2926,
 *         times:
 *          { user: 306960,
 *            nice: 0,
 *            sys: 26980,
 *            idle: 1071569080,
 *            irq: 0 } },
 *       { model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
 *         speed: 2926,
 *         times:
 *          { user: 248450,
 *            nice: 0,
 *            sys: 21750,
 *            idle: 1070919370,
 *            irq: 0 } },
 *       { model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
 *         speed: 2926,
 *         times:
 *          { user: 256880,
 *            nice: 0,
 *            sys: 19430,
 *            idle: 1070905480,
 *            irq: 20 } },
 *       { model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
 *         speed: 2926,
 *         times:
 *          { user: 511580,
 *            nice: 20,
 *            sys: 40900,
 *            idle: 1070842510,
 *            irq: 0 } },
 *       { model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
 *         speed: 2926,
 *         times:
 *          { user: 291660,
 *            nice: 0,
 *            sys: 34360,
 *            idle: 1070888000,
 *            irq: 10 } },
 *       { model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
 *         speed: 2926,
 *         times:
 *          { user: 308260,
 *            nice: 0,
 *            sys: 55410,
 *            idle: 1071129970,
 *            irq: 880 } },
 *       { model: 'Intel(R) Core(TM) i7 CPU         860  @ 2.80GHz',
 *         speed: 2926,
 *         times:
 *          { user: 266450,
 *            nice: 1480,
 *            sys: 34920,
 *            idle: 1072572010,
 *            irq: 30 } } ]
 * @return {*}
 */
node.os.prototype.cpus = function() {
  return node.os.core_.cpus();
};

/**
 * Returns the operating system name.
 * @return {*}
 */
node.os.prototype.type = function() {
  return node.os.core_.type();
};

/**
 * Returns the operating system release.
 * @return {*}
 */
node.os.prototype.release = function() {
  return node.os.core_.release();
};


/**
 * @private
 * @type {*}
 */
node.os.core_ = require("os");