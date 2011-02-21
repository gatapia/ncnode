
goog.provide("child_process");

/**
 * @param {*} path
 * @param {*} args /*
 * @param {*} options
 * @param {*} customFds */
 * @return {*}
 */
child_process.prototype.spawn = function(path, args /*, options, customFds */) {
  return child_process.core.spawn(path, args /*, options, customFds */);
};

/**
 * @param {*} command /*
 * @param {*} options
 * @param {*} callback */
 * @return {*}
 */
child_process.prototype.exec = function(command /*, options, callback */) {
  return child_process.core.exec(command /*, options, callback */);
};

/**
 * @param {*} file /* args
 * @param {*} options
 * @param {*} callback */
 * @return {*}
 */
child_process.prototype.execFile = function(file /* args, options, callback */) {
  return child_process.core.execFile(file /* args, options, callback */);
};


child_process.core = require("child_process");