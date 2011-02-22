/**
 * @name node.tty_posix.WriteStream
 * @namespace
 */

goog.provide("node.tty_posix.WriteStream");


/**
 * @private
 * @type {*}
 */
node.tty_posix.WriteStream.core_ = require("tty_posix").WriteStream;