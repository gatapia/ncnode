
goog.provide("node.http.OutgoingMessage");

/**
 * @constructor
 * http.OutgoingMessage
 */
node.http.OutgoingMessage = function() {};


/**
 * @private
 * @type {*}
 */
node.http.OutgoingMessage.core_ = require("http").OutgoingMessage;