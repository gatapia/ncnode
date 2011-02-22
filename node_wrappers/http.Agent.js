/**
 * @name node.http.Agent
 * @namespace
 */

goog.provide("node.http.Agent");


/**
 * @private
 * @type {*}
 */
node.http.Agent.core_ = require("http").Agent;