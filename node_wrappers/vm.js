
goog.provide("vm");

/**
 * @fileoverview You can access this module with:
 * <pre>
 *     var vm = require('vm');
 * </pre>
 * JavaScript code can be compiled and run immediately or compiled, saved, and run later.
 */

/**
 * `createScript` compiles `code` as if it were loaded from `filename`,
 * but does not run it. Instead, it returns a `vm.Script` object representing this compiled code.
 * This script can be run later many times using methods below.
 * The returned script is not bound to any global object.
 * It is bound before each run, just for that run. `filename` is optional.
 *
 * In case of syntax error in `code`, `createScript` prints the syntax error to stderr
 * and throws an exception.
 * @param {*} code
 * @param {*} ctx
 * @param {*} name
 * @return {*}
 */
vm.prototype.createScript = function(code, ctx, name) {
  return vm.core.createScript(code, ctx, name);
};

/**
 * @return {*}
 */
vm.prototype.createContext = function() {
  return vm.core.createContext();
};

/**
 * @return {*}
 */
vm.prototype.runInContext = function() {
  return vm.core.runInContext();
};

/**
 * Similar to `vm.runInThisContext` but a method of a precompiled `Script` object.
 * `script.runInThisContext` runs the code of `script` and returns the result.
 * Running code does not have access to local scope, but does have access to the `global` object
 * (v8: in actual context).
 *
 * Example of using `script.runInThisContext` to compile code once and run it multiple times:
 * <pre>
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
vm.prototype.runInThisContext = function() {
  return vm.core.runInThisContext();
};

/**
 * Similar to `vm.runInNewContext` a method of a precompiled `Script` object.
 * `script.runInNewContext` runs the code of `script` with `sandbox` as the global object and returns the result.
 * Running code does not have access to local scope. `sandbox` is optional.
 *
 * Example: compile code that increments a global variable and sets one, then execute this code multiple times.
 * These globals are contained in the sandbox.
 * <pre>
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
 * global variable leakage, `script.runInNewContext` is quite useful, but safely running untrusted code
 * requires a separate process.
 * @return {*}
 */
vm.prototype.runInNewContext = function() {
  return vm.core.runInNewContext();
};


vm.core = require("vm");