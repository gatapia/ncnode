/**
 * @name node.fs.WriteStream
 * @namespace
 * <code>WriteStream</code> is a <code>Writable Stream</code>.
 */

goog.provide("node.fs.WriteStream");


/**
 * @private
 * @type {*}
 */
node.fs.WriteStream.core_ = require("fs").WriteStream;