
goog.provide("node.tty_posix.ReadStream");

/**
 * @constructor
 */
node.tty_posix.ReadStream = function() {};


/**
 * @private
 * @type {*}
 */
node.tty_posix.ReadStream.core_ = require("tty_posix").ReadStream;