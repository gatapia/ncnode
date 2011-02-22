/**
 * @name node
 * @namespace
 * An example of a [web server](http.html) written with Node which responds with 'Hello
World':
<pre>
    var http = require('http');

    http.createServer(function (request, response) {
      response.writeHead(200, {'Content-Type': 'text&#47;plain'});
      response.end('Hello World\n');
    }).listen(8124);

    console.log('Server running at http:&#47;&#47;127.0.0.1:8124&#47;');
</pre>
To run the server, put the code into a file called `example.js` and execute
it with the node program
<pre>
    > node example.js
    Server running at http:&#47;&#47;127.0.0.1:8124&#47;
</pre>
All of the examples in the documentation can be run similarly.
 */

goog.provide("node");


/**
 * @private
 * @type {*}
 */
node.core_ = require("node");