/**
 * @name node.http.Server
 * @namespace
 * This is an <code class="code prettyprint lang-js">EventEmitter</code> with the following events:
 */

goog.provide("node.http.Server");


/**
 * @private
 * @type {*}
 */
node.http.Server.core_ = require("http").Server;