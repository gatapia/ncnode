
goog.provide("util");

/**
 * @fileoverview These functions are in the module `'util'`. Use `require('util')` to access
 * them.
 */

/**
 * @return {*}
 */
util.prototype.print = function() {
  return util.core.print();
};

/**
 * @return {*}
 */
util.prototype.puts = function() {
  return util.core.puts();
};

/**
 * A synchronous output function. Will block the process and
 * output `string` immediately to `stderr`.
 * <pre>
 *     require('util').debug('message on stderr');
 * </pre>
 * @param {*} x
 * @return {*}
 */
util.prototype.debug = function(x) {
  return util.core.debug(x);
};

/**
 * @param {*} x
 * @return {*}
 */
util.prototype.error = function(x) {
  return util.core.error(x);
};

/**
 * Return a string representation of `object`, which is useful for debugging.
 *
 * If `showHidden` is `true`, then the object's non-enumerable properties will be
 * shown too.
 *
 * If `depth` is provided, it tells `inspect` how many times to recurse while
 * formatting the object. This is useful for inspecting large complicated objects.
 *
 * The default is to only recurse twice.  To make it recurse indefinitely, pass
 * in `null` for `depth`.
 *
 * Example of inspecting all properties of the `util` object:
 * <pre>
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
util.prototype.inspect = function(obj, showHidden, depth, colors) {
  return util.core.inspect(obj, showHidden, depth, colors);
};

/**
 * @return {*}
 */
util.prototype.p = function() {
  return util.core.p();
};

/**
 * Output with timestamp on `stdout`.
 * <pre>
 *     require('util').log('Timestmaped message.');
 * </pre>
 * @param {*} msg
 * @return {*}
 */
util.prototype.log = function(msg) {
  return util.core.log(msg);
};

/**
 * @return {*}
 */
util.prototype.exec = function() {
  return util.core.exec();
};

/**
 * Experimental
 *
 * Read the data from `readableStream` and send it to the `writableStream`.
 * When `writableStream.write(data)` returns `false` `readableStream` will be
 * paused until the `drain` event occurs on the `writableStream`. `callback` gets
 * an error as its only argument and is called when `writableStream` is closed or
 * when an error occurs.
 * @param {*} readStream
 * @param {*} writeStream
 * @param {*} callback
 * @return {*}
 */
util.prototype.pump = function(readStream, writeStream, callback) {
  return util.core.pump(readStream, writeStream, callback);
};

/**
 * Inherit the prototype methods from one
 * [constructor](https:&#47;&#47;developer.mozilla.org&#47;en&#47;JavaScript&#47;Reference&#47;Global_Objects&#47;Object&#47;constructor)
 * into another.  The prototype of `constructor` will be set to a new
 * object created from `superConstructor`.
 *
 * As an additional convenience, `superConstructor` will be accessible
 * through the `constructor.super_` property.
 * <pre>
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
util.prototype.inherits = function(ctor, superCtor) {
  return util.core.inherits(ctor, superCtor);
};


util.core = require("util");