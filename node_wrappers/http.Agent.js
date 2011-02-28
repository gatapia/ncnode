
goog.provide("node.http.Agent");

/**
 * @constructor
 */
node.http.Agent = function() {};


/**
 * @private
 * @type {*}
 */
node.http.Agent.core_ = require("http").Agent;