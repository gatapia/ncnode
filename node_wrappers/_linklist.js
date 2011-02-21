
goog.provide("_linklist");

/**
 * @param {*} list
 * @return {*}
 */
_linklist.prototype.init = function(list) {
  return _linklist.core.init(list);
};

/**
 * @param {*} list
 * @return {*}
 */
_linklist.prototype.peek = function(list) {
  return _linklist.core.peek(list);
};

/**
 * @param {*} list
 * @return {*}
 */
_linklist.prototype.shift = function(list) {
  return _linklist.core.shift(list);
};

/**
 * @param {*} item
 * @return {*}
 */
_linklist.prototype.remove = function(item) {
  return _linklist.core.remove(item);
};

/**
 * @param {*} list
 * @param {*} item
 * @return {*}
 */
_linklist.prototype.append = function(list, item) {
  return _linklist.core.append(list, item);
};

/**
 * @param {*} list
 * @return {*}
 */
_linklist.prototype.isEmpty = function(list) {
  return _linklist.core.isEmpty(list);
};


_linklist.core = require("_linklist");