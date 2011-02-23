/**
 * @name node.events
 * @namespace
 * Many objects in Node emit events: a <code class="code prettyprint lang-js">net.Server</code> emits an event each time
 * a peer connects to it, a <code class="code prettyprint lang-js">fs.readStream</code> emits an event when the file is
 * opened. All objects which emit events are instances of <code class="code prettyprint lang-js">events.EventEmitter</code>.
 * You can access this module by doing: <code class="code prettyprint lang-js">require("events");</code>
 *
 * Typically, event names are represented by a camel-cased string, however,
 * there aren't any strict restrictions on that, as any string will be accepted.
 *
 * Functions can then be attached to objects, to be executed when an event
 * is emitted. These functions are called <em>listeners</em>.
 */

goog.provide("node.events");


/**
 * @private
 * @type {*}
 */
node.events.core_ = require("events");