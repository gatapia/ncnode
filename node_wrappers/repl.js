/**
 * @name node.repl
 * @namespace
 * A Read-Eval-Print-Loop (REPL) is available both as a standalone program and easily
 * includable in other programs.  REPL provides a way to interactively run
 * JavaScript and see the results.  It can be used for debugging, testing, or
 * just trying things out.
 *
 * By executing `node` without any arguments from the command-line you will be
 * dropped into the REPL. It has simplistic emacs line-editing.
 * <pre class="code prettyprint lang-js">
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
 * <pre class="code prettyprint lang-js">
 *     alias node="env NODE_NO_READLINE=1 rlwrap node"
 * </pre>
 */

goog.provide("node.repl");


/**
 * @private
 * @type {*}
 */
node.repl.core_ = require("repl");