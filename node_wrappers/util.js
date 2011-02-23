/**
 * @name node.util
 * @namespace
 * These functions are in the module <code class="code prettyprint lang-js">'util'</code>. Use <code class="code prettyprint lang-js">require('util')</code> to access
 * them.
 */

goog.provide("node.util");

/**
 * @return {*}
 */
node.util.prototype.print = function() {
  return node.util.core_.print();
};

/**
 * @return {*}
 */
node.util.prototype.puts = function() {
  return node.util.core_.puts();
};

/**
 * A synchronous output function. Will block the process and
 * output <code class="code prettyprint lang-js">string</code> immediately to <code class="code prettyprint lang-js">stderr</code>.
 * <pre class="code prettyprint lang-js">
 *     require('util').debug('message on stderr');
 * </pre>
 * @param {*} x
 * @return {*}
 */
node.util.prototype.debug = function(x) {
  return node.util.core_.debug(x);
};

/**
 * @param {*} x
 * @return {*}
 */
node.util.prototype.error = function(x) {
  return node.util.core_.error(x);
};

/**
 * Return a string representation of <code class="code prettyprint lang-js">object</code>, which is useful for debugging.
 *
 * If <code class="code prettyprint lang-js">showHidden</code> is <code class="code prettyprint lang-js">true</code>, then the object's non-enumerable properties will be
 * shown too.
 *
 * If <code class="code prettyprint lang-js">depth</code> is provided, it tells <code class="code prettyprint lang-js">inspect</code> how many times to recurse while
 * formatting the object. This is useful for inspecting large complicated objects.
 *
 * The default is to only recurse twice.  To make it recurse indefinitely, pass
 * in <code class="code prettyprint lang-js">null</code> for <code class="code prettyprint lang-js">depth</code>.
 *
 * Example of inspecting all properties of the <code class="code prettyprint lang-js">util</code> object:
 * <pre class="code prettyprint lang-js">
 *     var util = require('util');
 *
 *     console.log(util.inspect(util, true, null));
 * </pre>
 * @param {*} obj
 * @param {*} showHidden
 * @param {*} depth
 * @param {*} colors
 * @return {*}
 */
node.util.prototype.inspect = function(obj, showHidden, depth, colors) {
  return node.util.core_.inspect(obj, showHidden, depth, colors);
};

/**
 * @return {*}
 */
node.util.prototype.p = function() {
  return node.util.core_.p();
};

/**
 * Output with timestamp on <code class="code prettyprint lang-js">stdout</code>.
 * <pre class="code prettyprint lang-js">
 *     require('util').log('Timestmaped message.');
 * </pre>
 * @param {*} msg
 * @return {*}
 */
node.util.prototype.log = function(msg) {
  return node.util.core_.log(msg);
};

/**
 * @return {*}
 */
node.util.prototype.exec = function() {
  return node.util.core_.exec();
};

/**
 * Experimental
 *
 * Read the data from <code class="code prettyprint lang-js">readableStream</code> and send it to the <code class="code prettyprint lang-js">writableStream</code>.
 * When <code class="code prettyprint lang-js">writableStream.write(data)</code> returns <code class="code prettyprint lang-js">false</code> <code class="code prettyprint lang-js">readableStream</code> will be
 * paused until the <code class="code prettyprint lang-js">drain</code> event occurs on the <code class="code prettyprint lang-js">writableStream</code>. <code class="code prettyprint lang-js">callback</code> gets
 * an error as its only argument and is called when <code class="code prettyprint lang-js">writableStream</code> is closed or
 * when an error occurs.
 * @param {*} readStream
 * @param {*} writeStream
 * @param {*} callback
 * @return {*}
 */
node.util.prototype.pump = function(readStream, writeStream, callback) {
  return node.util.core_.pump(readStream, writeStream, callback);
};

/**
 * Inherit the prototype methods from one
 * <a href="node.https:&#47;&#47;developer.mozilla.org&#47;en&#47;JavaScript&#47;Reference&#47;Global<em>Objects&#47;Object&#47;constructor">constructor</a>
 * into another.  The prototype of <code class="code prettyprint lang-js">constructor</code> will be set to a new
 * object created from <code class="code prettyprint lang-js">superConstructor</code>.
 *
 * As an additional convenience, <code class="code prettyprint lang-js">superConstructor</code> will be accessible
 * through the <code class="code prettyprint lang-js">constructor.super</em></code> property.
 * <pre class="code prettyprint lang-js">
 *     var util = require("util");
 *     var events = require("events");
 *
 *     function MyStream() {
 *         events.EventEmitter.call(this);
 *     }
 *
 *     util.inherits(MyStream, events.EventEmitter);
 *
 *     MyStream.prototype.write = function(data) {
 *         this.emit("data", data);
 *     }
 *
 *     var stream = new MyStream();
 *
 *     console.log(stream instanceof events.EventEmitter); &#47;&#47; true
 *     console.log(MyStream.super_ === events.EventEmitter); &#47;&#47; true
 *
 *     stream.on("data", function(data) {
 *         console.log('Received data: "' + data + '"');
 *     })
 *     stream.write("It works!"); &#47;&#47; Received data: "It works!"
 * @param {*} ctor
 * @param {*} superCtor
 * @return {*}
 */
node.util.prototype.inherits = function(ctor, superCtor) {
  return node.util.core_.inherits(ctor, superCtor);
};


/**
 * @private
 * @type {*}
 */
node.util.core_ = require("util");