
goog.provide("node.fs.ReadStream");

/**
 * @fileoverview `ReadStream` is a `Readable Stream`.
 */

/**
 * @constructor
 * fs.ReadStream
 */
node.fs.ReadStream = function() {};


/**
 * @private
 * @type {*}
 */
node.fs.ReadStream.core_ = require("fs").ReadStream;