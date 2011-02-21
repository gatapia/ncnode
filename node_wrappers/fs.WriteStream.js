
goog.provide("node.fs.WriteStream");

/**
 * @fileoverview `WriteStream` is a `Writable Stream`.
 */


/**
 * @private
 * @type {*}
 */
node.fs.WriteStream.core_ = require("fs").WriteStream;