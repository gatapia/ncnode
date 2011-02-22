/**
 * @name node.tty_posix.ReadStream
 * @namespace
 */

goog.provide("node.tty_posix.ReadStream");


/**
 * @private
 * @type {*}
 */
node.tty_posix.ReadStream.core_ = require("tty_posix").ReadStream;