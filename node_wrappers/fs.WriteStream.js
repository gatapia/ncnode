/**
 * @name node.fs.WriteStream
 * @namespace
 * <code class="code prettyprint lang-js">WriteStream</code> is a <code class="code prettyprint lang-js">Writable Stream</code>.
 */

goog.provide("node.fs.WriteStream");


/**
 * @private
 * @type {*}
 */
node.fs.WriteStream.core_ = require("fs").WriteStream;