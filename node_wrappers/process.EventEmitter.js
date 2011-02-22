
goog.provide("node.process.EventEmitter");

/**
 * @constructor
 * process.EventEmitter
 */
node.process.EventEmitter = function() {};


/**
 * @private
 * @type {*}
 */
node.process.EventEmitter.core_ = process.EventEmitter;