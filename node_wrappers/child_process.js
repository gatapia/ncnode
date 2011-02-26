/**
 * @name node.child_process
 * @namespace
 */

goog.provide("node.child_process");

/**
 * @param {string} path
 * @param {Array.<*>} args
 * @param {Object} options
 * @param {string} customFds */
 * @return {string}
 */
node.child_process.prototype.spawn = function(path, args, options, customFds */) {
  return node.child_process.core_.spawn(path, args, options, customFds */);
};

/**
 * @param {string} command
 * @param {Object} options
 * @param {string} callback */
 * @return {string}
 */
node.child_process.prototype.exec = function(command, options, callback */) {
  return node.child_process.core_.exec(command, options, callback */);
};

/**
 * @param {string} file
 * @param {Object} options
 * @param {string} callback */
 * @return {string}
 */
node.child_process.prototype.execFile = function(file, options, callback */) {
  return node.child_process.core_.execFile(file, options, callback */);
};


/**
 * @private
 * @type {*}
 */
node.child_process.core_ = require("child_process");