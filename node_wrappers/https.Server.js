/**
 * @name node.https.Server
 * @namespace
 */

goog.provide("node.https.Server");


/**
 * @private
 * @type {*}
 */
node.https.Server.core_ = require("https").Server;