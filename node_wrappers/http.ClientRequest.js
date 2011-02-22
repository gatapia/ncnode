
goog.provide("node.http.ClientRequest");

/**
 * @fileoverview This object is created internally and returned from `http.request()`.  It
 * represents an _in-progress_ request whose header has already been sent.
 *
 * To get the response, add a listener for `'response'` to the request object.
 * `'response'` will be emitted from the request object when the response
 * headers have been received.  The `'response'` event is executed with one
 * argument which is an instance of `http.ClientResponse`.
 *
 * During the `'response'` event, one can add listeners to the
 * response object; particularly to listen for the `'data'` event. Note that
 * the `'response'` event is called before any part of the response body is received,
 * so there is no need to worry about racing to catch the first part of the
 * body. As long as a listener for `'data'` is added during the `'response'`
 * event, the entire body will be caught.
 *
 * <pre>
 *     &#47;&#47; Good
 *     request.on('response', function (response) {
 *       response.on('data', function (chunk) {
 *         console.log('BODY: ' + chunk);
 *       });
 *     });
 *
 *     &#47;&#47; Bad - misses all or part of the body
 *     request.on('response', function (response) {
 *       setTimeout(function () {
 *         response.on('data', function (chunk) {
 *           console.log('BODY: ' + chunk);
 *         });
 *       }, 10);
 *     });
 * </pre>
 * This is a `Writable Stream`.
 *
 * This is an `EventEmitter` with the following events:
 */

/**
 * @constructor
 * http.ClientRequest
 */
node.http.ClientRequest = function() {};


/**
 * @private
 * @type {*}
 */
node.http.ClientRequest.core_ = require("http").ClientRequest;