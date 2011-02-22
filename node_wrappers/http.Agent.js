
goog.provide("node.http.Agent");

/**
 * @constructor
 * http.Agent
 */
node.http.Agent = function() {};


/**
 * @private
 * @type {*}
 */
node.http.Agent.core_ = require("http").Agent;