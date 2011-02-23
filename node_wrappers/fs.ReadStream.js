/**
 * @name node.fs.ReadStream
 * @namespace
 * <code class="code prettyprint lang-js">ReadStream</code> is a <code class="code prettyprint lang-js">Readable Stream</code>.
 */

goog.provide("node.fs.ReadStream");


/**
 * @private
 * @type {*}
 */
node.fs.ReadStream.core_ = require("fs").ReadStream;