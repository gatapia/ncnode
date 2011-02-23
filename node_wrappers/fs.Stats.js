/**
 * @name node.fs.Stats
 * @namespace
 * Objects returned from <code class="code prettyprint lang-js">fs.stat()</code> and <code class="code prettyprint lang-js">fs.lstat()</code> are of this type.
 *
 *  - <code class="code prettyprint lang-js">stats.isFile()</code>
 *  - <code class="code prettyprint lang-js">stats.isDirectory()</code>
 *  - <code class="code prettyprint lang-js">stats.isBlockDevice()</code>
 *  - <code class="code prettyprint lang-js">stats.isCharacterDevice()</code>
 *  - <code class="code prettyprint lang-js">stats.isSymbolicLink()</code> (only valid with  <code class="code prettyprint lang-js">fs.lstat()</code>)
 *  - <code class="code prettyprint lang-js">stats.isFIFO()</code>
 *  - <code class="code prettyprint lang-js">stats.isSocket()</code>
 */

goog.provide("node.fs.Stats");


/**
 * @private
 * @type {*}
 */
node.fs.Stats.core_ = require("fs").Stats;