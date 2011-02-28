
goog.provide("node.net.Stream");

/**
 * @constructor
 */
node.net.Stream = function() {};


/**
 * @private
 * @type {*}
 */
node.net.Stream.core_ = require("net").Stream;