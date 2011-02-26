/**
 * @name node.vm.Script
 * @namespace
 */

goog.provide("node.vm.Script");

/**
 * @return {string}
 */
node.vm.Script.prototype.createContext = function() {
  return node.vm.Script.core_.createContext();
};

/**
 * @return {string}
 */
node.vm.Script.prototype.runInContext = function() {
  return node.vm.Script.core_.runInContext();
};

/**
 * @return {string}
 */
node.vm.Script.prototype.runInThisContext = function() {
  return node.vm.Script.core_.runInThisContext();
};

/**
 * @return {string}
 */
node.vm.Script.prototype.runInNewContext = function() {
  return node.vm.Script.core_.runInNewContext();
};


/**
 * @private
 * @type {*}
 */
node.vm.Script.core_ = require("vm").Script;