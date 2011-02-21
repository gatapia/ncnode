
goog.provide("node._linklist");

/**
 * @param {*} list
 * @return {*}
 */
node._linklist.prototype.init = function(list) {
  return node._linklist.core_.init(list);
};

/**
 * @param {*} list
 * @return {*}
 */
node._linklist.prototype.peek = function(list) {
  return node._linklist.core_.peek(list);
};

/**
 * @param {*} list
 * @return {*}
 */
node._linklist.prototype.shift = function(list) {
  return node._linklist.core_.shift(list);
};

/**
 * @param {*} item
 * @return {*}
 */
node._linklist.prototype.remove = function(item) {
  return node._linklist.core_.remove(item);
};

/**
 * @param {*} list
 * @param {*} item
 * @return {*}
 */
node._linklist.prototype.append = function(list, item) {
  return node._linklist.core_.append(list, item);
};

/**
 * @param {*} list
 * @return {*}
 */
node._linklist.prototype.isEmpty = function(list) {
  return node._linklist.core_.isEmpty(list);
};


/**
 * @private
 * @type {*}
 */
node._linklist.core_ = require("_linklist");