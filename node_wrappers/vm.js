/**
 * @name node.vm
 * @namespace
 * You can access this module with:
 * <pre class="code prettyprint lang-js">
 *     var vm = require('vm');
 * </pre>
 * JavaScript code can be compiled and run immediately or compiled, saved, and run later.
 */

goog.provide("node.vm");

/**
 * <code class="code prettyprint lang-js">createScript</code> compiles <code class="code prettyprint lang-js">code</code> as if it were loaded from <code class="code prettyprint lang-js">filename</code>,
 * but does not run it. Instead, it returns a <code class="code prettyprint lang-js">vm.Script</code> object representing this compiled code.
 * This script can be run later many times using methods below.
 * The returned script is not bound to any global object.
 * It is bound before each run, just for that run. <code class="code prettyprint lang-js">filename</code> is optional.
 *
 * In case of syntax error in <code class="code prettyprint lang-js">code</code>, <code class="code prettyprint lang-js">createScript</code> prints the syntax error to stderr
 * and throws an exception.
 * @param {*} code
 * @param {*} ctx
 * @param {*} name
 * @return {*}
 */
node.vm.prototype.createScript = function(code, ctx, name) {
  return node.vm.core_.createScript(code, ctx, name);
};

/**
 * @return {*}
 */
node.vm.prototype.createContext = function() {
  return node.vm.core_.createContext();
};

/**
 * @return {*}
 */
node.vm.prototype.runInContext = function() {
  return node.vm.core_.runInContext();
};

/**
 * Similar to <code class="code prettyprint lang-js">vm.runInThisContext</code> but a method of a precompiled <code class="code prettyprint lang-js">Script</code> object.
 * <code class="code prettyprint lang-js">script.runInThisContext</code> runs the code of <code class="code prettyprint lang-js">script</code> and returns the result.
 * Running code does not have access to local scope, but does have access to the <code class="code prettyprint lang-js">global</code> object
 * (v8: in actual context).
 *
 * Example of using <code class="code prettyprint lang-js">script.runInThisContext</code> to compile code once and run it multiple times:
 * <pre class="code prettyprint lang-js">
 *     var vm = require('vm');
 *
 *     globalVar = 0;
 *
 *     var script = vm.createScript('globalVar += 1', 'myfile.vm');
 *
 *     for (var i = 0; i < 1000 ; i += 1) {
 *       script.runInThisContext();
 *     }
 *
 *     console.log(globalVar);
 *
 *     &#47;&#47; 1000
 * </pre>
 * @return {*}
 */
node.vm.prototype.runInThisContext = function() {
  return node.vm.core_.runInThisContext();
};

/**
 * Similar to <code class="code prettyprint lang-js">vm.runInNewContext</code> a method of a precompiled <code class="code prettyprint lang-js">Script</code> object.
 * <code class="code prettyprint lang-js">script.runInNewContext</code> runs the code of <code class="code prettyprint lang-js">script</code> with <code class="code prettyprint lang-js">sandbox</code> as the global object and returns the result.
 * Running code does not have access to local scope. <code class="code prettyprint lang-js">sandbox</code> is optional.
 *
 * Example: compile code that increments a global variable and sets one, then execute this code multiple times.
 * These globals are contained in the sandbox.
 * <pre class="code prettyprint lang-js">
 *     var util = require('util'),
 *         vm = require('vm'),
 *         sandbox = {
 *           animal: 'cat',
 *           count: 2
 *         };
 *
 *     var script = vm.createScript('count += 1; name = "kitty"', 'myfile.vm');
 *
 *     for (var i = 0; i < 10 ; i += 1) {
 *       script.runInNewContext(sandbox);
 *     }
 *
 *     console.log(util.inspect(sandbox));
 *
 *     &#47;&#47; { animal: 'cat', count: 12, name: 'kitty' }
 * </pre>
 * Note that running untrusted code is a tricky business requiring great care.  To prevent accidental
 * global variable leakage, <code class="code prettyprint lang-js">script.runInNewContext</code> is quite useful, but safely running untrusted code
 * requires a separate process.
 * @return {*}
 */
node.vm.prototype.runInNewContext = function() {
  return node.vm.core_.runInNewContext();
};


/**
 * @private
 * @type {*}
 */
node.vm.core_ = require("vm");