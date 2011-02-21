
goog.provide("assert");

/**
 * @fileoverview This module is used for writing unit tests for your applications, you can
 * access it with `require('assert')`.
 */

/**
 * Tests if `actual` is equal to `expected` using the operator provided.
 * @param {*} actual
 * @param {*} expected
 * @param {*} message
 * @param {*} operator
 * @param {*} stackStartFunction
 * @return {*}
 */
assert.prototype.fail = function(actual, expected, message, operator, stackStartFunction) {
  return assert.core.fail(actual, expected, message, operator, stackStartFunction);
};

/**
 * Tests if value is a `true` value, it is equivalent to `assert.equal(true, value, message);`
 * @param {*} value
 * @param {*} message
 * @return {*}
 */
assert.prototype.ok = function(value, message) {
  return assert.core.ok(value, message);
};

/**
 * Tests shallow, coercive equality with the equal comparison operator ( `==` ).
 * @param {*} actual
 * @param {*} expected
 * @param {*} message
 * @return {*}
 */
assert.prototype.equal = function(actual, expected, message) {
  return assert.core.equal(actual, expected, message);
};

/**
 * Tests shallow, coercive non-equality with the not equal comparison operator ( `!=` ).
 * @param {*} actual
 * @param {*} expected
 * @param {*} message
 * @return {*}
 */
assert.prototype.notEqual = function(actual, expected, message) {
  return assert.core.notEqual(actual, expected, message);
};

/**
 * Tests for deep equality.
 * @param {*} actual
 * @param {*} expected
 * @param {*} message
 * @return {*}
 */
assert.prototype.deepEqual = function(actual, expected, message) {
  return assert.core.deepEqual(actual, expected, message);
};

/**
 * Tests for any deep inequality.
 * @param {*} actual
 * @param {*} expected
 * @param {*} message
 * @return {*}
 */
assert.prototype.notDeepEqual = function(actual, expected, message) {
  return assert.core.notDeepEqual(actual, expected, message);
};

/**
 * Tests strict equality, as determined by the strict equality operator ( `===` )
 * @param {*} actual
 * @param {*} expected
 * @param {*} message
 * @return {*}
 */
assert.prototype.strictEqual = function(actual, expected, message) {
  return assert.core.strictEqual(actual, expected, message);
};

/**
 * Tests strict non-equality, as determined by the strict not equal operator ( `!==` )
 * @param {*} actual
 * @param {*} expected
 * @param {*} message
 * @return {*}
 */
assert.prototype.notStrictEqual = function(actual, expected, message) {
  return assert.core.notStrictEqual(actual, expected, message);
};

/**
 * Expects `block` to throw an error. `error` can be constructor, regexp or
 * validation function.
 *
 * Validate instanceof using constructor:
 * <pre>
 *     assert.throws(
 *       function() {
 *         throw new Error("Wrong value");
 *       },
 *       Error
 *     );
 * </pre>
 * Validate error message using RegExp:
 * <pre>
 *     assert.throws(
 *       function() {
 *         throw new Error("Wrong value");
 *       },
 *       &#47;value&#47;
 *     );
 * </pre>
 * Custom error validation:
 * <pre>
 *     assert.throws(
 *       function() {
 *         throw new Error("Wrong value");
 *       },
 *       function(err) {
 *         if ( (err instanceof Error) && &#47;value&#47;.test(err) ) {
 *           return true;
 *         }
 *       },
 *       "unexpected error"
 *     );
 * </pre>
 * @param {*} block
 * @param {*=} error
 * @param {*=} message
 * @return {*}
 */
assert.prototype.throws = function(block, error, message) {
  return assert.core.throws(block, error, message);
};

/**
 * Expects `block` not to throw an error, see assert.throws for details.
 * @param {*} block
 * @param {*=} error
 * @param {*=} message
 * @return {*}
 */
assert.prototype.doesNotThrow = function(block, error, message) {
  return assert.core.doesNotThrow(block, error, message);
};

/**
 * Tests if value is not a false value, throws if it is a true value. Useful when
 * testing the first argument, `error` in callbacks.
 * @param {*} err
 * @return {*}
 */
assert.prototype.ifError = function(err) {
  return assert.core.ifError(err);
};


assert.core = require("assert");