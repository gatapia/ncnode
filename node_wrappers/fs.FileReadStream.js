
goog.provide("node.fs.FileReadStream");

/**
 * @constructor
 * fs.FileReadStream
 */
node.fs.FileReadStream = function() {};


/**
 * @private
 * @type {*}
 */
node.fs.FileReadStream.core_ = require("fs").FileReadStream;