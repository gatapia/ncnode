/**
 * @name node.fs.WriteStream
 * @namespace
 * `WriteStream` is a `Writable Stream`.
 */

goog.provide("node.fs.WriteStream");


/**
 * @private
 * @type {*}
 */
node.fs.WriteStream.core_ = require("fs").WriteStream;