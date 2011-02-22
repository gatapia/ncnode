
goog.provide("node.events.EventEmitter");

/**
 * @constructor
 * events.EventEmitter
 */
node.events.EventEmitter = function() {};


/**
 * @private
 * @type {*}
 */
node.events.EventEmitter.core_ = require("events").EventEmitter;