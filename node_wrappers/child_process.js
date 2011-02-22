/**
 * @name node.child_process
 * @namespace
 */

goog.provide("node.child_process");

/**
 * @param {*} path
 * @param {*} args /*
 * @param {*} options
 * @param {*} customFds */
 * @return {*}
 */
node.child_process.prototype.spawn = function(path, args /*, options, customFds */) {
  return node.child_process.core_.spawn(path, args /*, options, customFds */);
};

/**
 * @param {*} command /*
 * @param {*} options
 * @param {*} callback */
 * @return {*}
 */
node.child_process.prototype.exec = function(command /*, options, callback */) {
  return node.child_process.core_.exec(command /*, options, callback */);
};

/**
 * @param {*} file /* args
 * @param {*} options
 * @param {*} callback */
 * @return {*}
 */
node.child_process.prototype.execFile = function(file /* args, options, callback */) {
  return node.child_process.core_.execFile(file /* args, options, callback */);
};


/**
 * @private
 * @type {*}
 */
node.child_process.core_ = require("child_process");