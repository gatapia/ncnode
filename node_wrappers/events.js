
goog.provide("node.events");

/**
 * @fileoverview Many objects in Node emit events: a `net.Server` emits an event each time
 * a peer connects to it, a `fs.readStream` emits an event when the file is
 * opened. All objects which emit events are instances of `events.EventEmitter`.
 * You can access this module by doing: `require("events");`
 *
 * Typically, event names are represented by a camel-cased string, however,
 * there aren't any strict restrictions on that, as any string will be accepted.
 *
 * Functions can then be attached to objects, to be executed when an event
 * is emitted. These functions are called _listeners_.
 */

/**
 * @constructor
 * events
 */
node.events = function() {};


/**
 * @private
 * @type {*}
 */
node.events.core_ = require("events");