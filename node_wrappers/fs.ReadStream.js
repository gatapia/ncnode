
goog.provide("node.fs.ReadStream");

/**
 * @fileoverview `ReadStream` is a `Readable Stream`.
 */


/**
 * @private
 * @type {*}
 */
node.fs.ReadStream.core_ = require("fs").ReadStream;