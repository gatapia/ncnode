
goog.provide("node.fs.WriteStream");

/**
 * @fileoverview `WriteStream` is a `Writable Stream`.
 */

/**
 * @constructor
 * fs.WriteStream
 */
node.fs.WriteStream = function() {};


/**
 * @private
 * @type {*}
 */
node.fs.WriteStream.core_ = require("fs").WriteStream;