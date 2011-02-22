/**
 * @name node.http.Agent
 * @namespace
 */

goog.provide("node.http.Agent");

/**
 * @type {*}
 */
node.http.Agent.prototype.defaultMaxSockets;


/**
 * @private
 * @type {*}
 */
node.http.Agent.core_ = require("http").Agent;