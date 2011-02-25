/**
 * @name node.fs.Stats
 * @namespace
 * Objects returned from <code>fs.stat()</code> and <code>fs.lstat()</code> are of this type.
 *
 *  - <code>stats.isFile()</code>
 *  - <code>stats.isDirectory()</code>
 *  - <code>stats.isBlockDevice()</code>
 *  - <code>stats.isCharacterDevice()</code>
 *  - <code>stats.isSymbolicLink()</code> (only valid with  <code>fs.lstat()</code>)
 *  - <code>stats.isFIFO()</code>
 *  - <code>stats.isSocket()</code>
 */

goog.provide("node.fs.Stats");


/**
 * @private
 * @type {*}
 */
node.fs.Stats.core_ = require("fs").Stats;