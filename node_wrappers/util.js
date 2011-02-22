
goog.provide("node.util");

/**
 * @fileoverview These functions are in the module `'util'`. Use `require('util')` to access
 * them.
 */

/**
 * @constructor
 * util
 */
node.util = function() {};

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
 * output `string` immediately to `stderr`.
 * <pre>
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
 * Output with timestamp on `stdout`.
 * <pre>
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
node.util.prototype.pump = function(readStream, writeStream, callback) {
  return node.util.core_.pump(readStream, writeStream, callback);
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
node.util.prototype.inherits = function(ctor, superCtor) {
  return node.util.core_.inherits(ctor, superCtor);
};


/**
 * @private
 * @type {*}
 */
node.util.core_ = require("util");