
goog.provide("node.net.Stream");

/**
 * @constructor
 * net.Stream
 */
node.net.Stream = function() {};


/**
 * @private
 * @type {*}
 */
node.net.Stream.core_ = require("net").Stream;