/**
 * @name node.http.ServerResponse
 * @namespace
 * This object is created internally by a HTTP server--not by the user. It is
 * passed as the second parameter to the <code class="code prettyprint lang-js">'request'</code> event. It is a <code class="code prettyprint lang-js">Writable Stream</code>.
 */

goog.provide("node.http.ServerResponse");


/**
 * @private
 * @type {*}
 */
node.http.ServerResponse.core_ = require("http").ServerResponse;