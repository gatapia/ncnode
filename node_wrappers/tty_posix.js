
goog.provide("node.tty_posix");

/**
 * @constructor
 * tty_posix
 */
node.tty_posix = function() {};

/**
 * @param {*} path
 * @param {*} args
 * @return {*}
 */
node.tty_posix.prototype.open = function(path, args) {
  return node.tty_posix.core_.open(path, args);
};


/**
 * @private
 * @type {*}
 */
node.tty_posix.core_ = require("tty_posix");