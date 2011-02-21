
goog.provide("tty_posix");

/**
 * @param {*} path
 * @param {*} args
 * @return {*}
 */
tty_posix.prototype.open = function(path, args) {
  return tty_posix.core.open(path, args);
};


tty_posix.core = require("tty_posix");