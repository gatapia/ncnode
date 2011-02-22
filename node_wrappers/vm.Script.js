
goog.provide("node.vm.Script");

/**
 * @constructor
 * vm.Script
 */
node.vm.Script = function() {};

/**
 * @return {*}
 */
node.vm.Script.prototype.createContext = function() {
  return node.vm.Script.core_.createContext();
};

/**
 * @return {*}
 */
node.vm.Script.prototype.runInContext = function() {
  return node.vm.Script.core_.runInContext();
};

/**
 * @return {*}
 */
node.vm.Script.prototype.runInThisContext = function() {
  return node.vm.Script.core_.runInThisContext();
};

/**
 * @return {*}
 */
node.vm.Script.prototype.runInNewContext = function() {
  return node.vm.Script.core_.runInNewContext();
};


/**
 * @private
 * @type {*}
 */
node.vm.Script.core_ = require("vm").Script;