
goog.provide("node.tty_posix.ReadStream");

/**
 * @constructor
 * tty_posix.ReadStream
 */
node.tty_posix.ReadStream = function() {};


/**
 * @private
 * @type {*}
 */
node.tty_posix.ReadStream.core_ = require("tty_posix").ReadStream;