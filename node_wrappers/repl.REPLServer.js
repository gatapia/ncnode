/**
 * @name node.repl.REPLServer
 * @namespace
 */

goog.provide("node.repl.REPLServer");


/**
 * @private
 * @type {*}
 */
node.repl.REPLServer.core_ = require("repl").REPLServer;