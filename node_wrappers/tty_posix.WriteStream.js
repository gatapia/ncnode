
goog.provide("node.tty_posix.WriteStream");

/**
 * @constructor
 * tty_posix.WriteStream
 */
node.tty_posix.WriteStream = function() {};


/**
 * @private
 * @type {*}
 */
node.tty_posix.WriteStream.core_ = require("tty_posix").WriteStream;