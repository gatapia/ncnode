/**
 * @name node.fs.ReadStream
 * @namespace
 * <code>ReadStream</code> is a <code>Readable Stream</code>.
 */

goog.provide("node.fs.ReadStream");


/**
 * @private
 * @type {*}
 */
node.fs.ReadStream.core_ = require("fs").ReadStream;