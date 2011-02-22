
goog.provide("node.stream.Stream");

/**
 * @constructor
 * stream.Stream
 */
node.stream.Stream = function() {};


/**
 * @private
 * @type {*}
 */
node.stream.Stream.core_ = require("stream").Stream;