
goog.provide("Script");

/**
 * @return {*}
 */
Script.prototype.createContext = function() {
  return Script.core.createContext();
};

/**
 * @return {*}
 */
Script.prototype.runInContext = function() {
  return Script.core.runInContext();
};

/**
 * @return {*}
 */
Script.prototype.runInThisContext = function() {
  return Script.core.runInThisContext();
};

/**
 * @return {*}
 */
Script.prototype.runInNewContext = function() {
  return Script.core.runInNewContext();
};


Script.core = require("vm").Script;