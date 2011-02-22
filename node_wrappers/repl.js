
goog.provide("node.repl");

/**
 * @fileoverview A Read-Eval-Print-Loop (REPL) is available both as a standalone program and easily
 * includable in other programs.  REPL provides a way to interactively run
 * JavaScript and see the results.  It can be used for debugging, testing, or
 * just trying things out.
 *
 * By executing `node` without any arguments from the command-line you will be
 * dropped into the REPL. It has simplistic emacs line-editing.
 * <pre>
 *     mjr:~$ node
 *     Type '.help' for options.
 *     > a = [ 1, 2, 3];
 *     [ 1, 2, 3 ]
 *     > a.forEach(function (v) {
 *     ...   console.log(v);
 *     ...   });
 *     1
 *     2
 *     3
 * </pre>
 * For advanced line-editors, start node with the environmental variable `NODE_NO_READLINE=1`.
 * This will start the REPL in canonical terminal settings which will allow you to use with `rlwrap`.
 *
 * For example, you could add this to your bashrc file:
 * <pre>
 *     alias node="env NODE_NO_READLINE=1 rlwrap node"
 * </pre>
 */

/**
 * @constructor
 * repl
 */
node.repl = function() {};

/**
 * @param {*} obj
 * @param {*} showHidden
 * @param {*} depth
 * @param {*} colors
 * @return {*}
 */
node.repl.prototype.writer = function(obj, showHidden, depth, colors) {
  return node.repl.core_.writer(obj, showHidden, depth, colors);
};

/**
 * Starts a REPL with `prompt` as the prompt and `stream` for all I&#47;O.  `prompt`
 * is optional and defaults to `> `.  `stream` is optional and defaults to
 * `process.stdin`.
 *
 * Multiple REPLs may be started against the same running instance of node.  Each
 * will share the same global object but will have unique I&#47;O.
 *
 * Here is an example that starts a REPL on stdin, a Unix socket, and a TCP socket:
 * <pre>
 *     var net = require("net"),
 *         repl = require("repl");
 *
 *     connections = 0;
 *
 *     repl.start("node via stdin> ");
 *
 *     net.createServer(function (socket) {
 *       connections += 1;
 *       repl.start("node via Unix socket> ", socket);
 *     }).listen("&#47;tmp&#47;node-repl-sock");
 *
 *     net.createServer(function (socket) {
 *       connections += 1;
 *       repl.start("node via TCP socket> ", socket);
 *     }).listen(5001);
 * </pre>
 * Running this program from the command line will start a REPL on stdin.  Other
 * REPL clients may connect through the Unix socket or TCP socket. `telnet` is useful
 * for connecting to TCP sockets, and `socat` can be used to connect to both Unix and
 * TCP sockets.
 *
 * By starting a REPL from a Unix socket-based server instead of stdin, you can
 * connect to a long-running node process without restarting it.
 * @param {*} prompt
 * @param {*} source
 * @return {*}
 */
node.repl.prototype.start = function(prompt, source) {
  return node.repl.core_.start(prompt, source);
};


/**
 * @private
 * @type {*}
 */
node.repl.core_ = require("repl");