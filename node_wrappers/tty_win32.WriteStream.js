
goog.provide("node.tty_win32.WriteStream");

/**
 * @constructor
 * tty_win32.WriteStream
 */
node.tty_win32.WriteStream = function() {};


/**
 * @private
 * @type {*}
 */
node.tty_win32.WriteStream.core_ = require("tty_win32").WriteStream;