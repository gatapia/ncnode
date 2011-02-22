
goog.provide("node.https.Server");

/**
 * @constructor
 * https.Server
 */
node.https.Server = function() {};


/**
 * @private
 * @type {*}
 */
node.https.Server.core_ = require("https").Server;