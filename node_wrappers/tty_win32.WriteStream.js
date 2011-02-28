
goog.provide("node.tty_win32.WriteStream");

/**
 * @constructor
 */
node.tty_win32.WriteStream = function() {};


/**
 * @private
 * @type {*}
 */
node.tty_win32.WriteStream.core_ = require("tty_win32").WriteStream;