/**
 * @name node.fs.ReadStream
 * @namespace
 * `ReadStream` is a `Readable Stream`.
 */

goog.provide("node.fs.ReadStream");


/**
 * @private
 * @type {*}
 */
node.fs.ReadStream.core_ = require("fs").ReadStream;