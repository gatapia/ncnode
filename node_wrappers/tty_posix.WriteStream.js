
goog.provide("node.tty_posix.WriteStream");

/**
 * @constructor
 */
node.tty_posix.WriteStream = function() {};


/**
 * @private
 * @type {*}
 */
node.tty_posix.WriteStream.core_ = require("tty_posix").WriteStream;