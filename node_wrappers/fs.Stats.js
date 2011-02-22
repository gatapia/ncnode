
goog.provide("node.fs.Stats");

/**
 * @fileoverview Objects returned from `fs.stat()` and `fs.lstat()` are of this type.
 *
 *  - `stats.isFile()`
 *  - `stats.isDirectory()`
 *  - `stats.isBlockDevice()`
 *  - `stats.isCharacterDevice()`
 *  - `stats.isSymbolicLink()` (only valid with  `fs.lstat()`)
 *  - `stats.isFIFO()`
 *  - `stats.isSocket()`
 */

/**
 * @constructor
 * fs.Stats
 */
node.fs.Stats = function() {};


/**
 * @private
 * @type {*}
 */
node.fs.Stats.core_ = require("fs").Stats;