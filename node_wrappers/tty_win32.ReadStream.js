
goog.provide("node.tty_win32.ReadStream");

/**
 * @constructor
 * tty_win32.ReadStream
 */
node.tty_win32.ReadStream = function() {};


/**
 * @private
 * @type {*}
 */
node.tty_win32.ReadStream.core_ = require("tty_win32").ReadStream;