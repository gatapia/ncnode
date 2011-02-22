/**
 * @name node.process
 * @namespace
 * The `process` object is a global object and can be accessed from anywhere.
 * It is an instance of `EventEmitter`.
 */

goog.provide("node.process");

/**
 * Getter&#47;setter to set what is displayed in 'ps'.
 * @type {*}
 */
node.process.prototype.title;

/**
 * A compiled-in property that exposes `NODE_VERSION`.
 * <pre class="code prettyprint lang-js">
 *     console.log('Version: ' + process.version);
 * </pre>
 * @type {*}
 */
node.process.prototype.version;

/**
 * A compiled-in property that exposes `NODE_PREFIX`.
 * <pre class="code prettyprint lang-js">
 *     console.log('Prefix: ' + process.installPrefix);
 * </pre>
 * @type {*}
 */
node.process.prototype.installPrefix;

/**
 * @type {*}
 */
node.process.prototype.versions;

/**
 * What platform you're running on. `'linux2'`, `'darwin'`, etc.
 * <pre class="code prettyprint lang-js">
 *     console.log('This platform is ' + process.platform);
 * </pre>
 * @type {*}
 */
node.process.prototype.platform;

/**
 * @type {*}
 */
node.process.prototype.ARGV;

/**
 * An array containing the command line arguments.  The first element will be
 * 'node', the second element will be the name of the JavaScript file.  The
 * next elements will be any additional command line arguments.
 * <pre class="code prettyprint lang-js">
 *     &#47;&#47; print process.argv
 *     process.argv.forEach(function (val, index, array) {
 *       console.log(index + ': ' + val);
 *     });
 * </pre>
 * This will generate:
 * <pre class="code prettyprint lang-js">
 *     $ node process-2.js one two=three four
 *     0: node
 *     1: &#47;Users&#47;mjr&#47;work&#47;node&#47;process-2.js
 *     2: one
 *     3: two=three
 *     4: four
 * </pre>
 * @type {*}
 */
node.process.prototype.argv;

/**
 * An object containing the user environment. See environ(7).
 * @type {*}
 */
node.process.prototype.env;

/**
 * @type {*}
 */
node.process.prototype.ENV;

/**
 * The PID of the process.
 * <pre class="code prettyprint lang-js">
 *     console.log('This process is pid ' + process.pid);
 * </pre>
 * @type {*}
 */
node.process.prototype.pid;

/**
 * This is the absolute pathname of the executable that started the process.
 *
 * Example:
 * <pre class="code prettyprint lang-js">
 *     &#47;usr&#47;local&#47;bin&#47;node
 * </pre>
 * @type {*}
 */
node.process.prototype.execPath;

/**
 * A `Writable Stream` to `stdout`.
 *
 * Example: the definition of `console.log`
 * <pre class="code prettyprint lang-js">
 *     console.log = function (d) {
 *       process.stdout.write(d + '\n');
 *     };
 * </pre>
 * @type {*}
 */
node.process.prototype.stdout;

/**
 * A `Readable Stream` for stdin. The stdin stream is paused by default, so one
 * must call `process.stdin.resume()` to read from it.
 *
 * Example of opening standard input and listening for both events:
 * <pre class="code prettyprint lang-js">
 *     process.stdin.resume();
 *     process.stdin.setEncoding('utf8');
 *
 *     process.stdin.on('data', function (chunk) {
 *       process.stdout.write('data: ' + chunk);
 *     });
 *
 *     process.stdin.on('end', function () {
 *       process.stdout.write('end');
 *     });
 * </pre>
 * @type {*}
 */
node.process.prototype.stdin;

/**
 * @type {*}
 */
node.process.prototype.mainModule;

/**
 * @return {*}
 */
node.process.prototype.compile = function() {
  return node.process.core_.compile();
};

/**
 * @return {*}
 */
node.process.prototype.reallyExit = function() {
  return node.process.core_.reallyExit();
};

/**
 * Changes the current working directory of the process or throws an exception if that fails.
 * <pre class="code prettyprint lang-js">
 *     console.log('Starting directory: ' + process.cwd());
 *     try {
 *       process.chdir('&#47;tmp');
 *       console.log('New directory: ' + process.cwd());
 *     }
 *     catch (err) {
 *       console.log('chdir: ' + err);
 *     }
 * </pre>
 * @return {*}
 */
node.process.prototype.chdir = function() {
  return node.process.core_.chdir();
};

/**
 * Returns the current working directory of the process.
 * <pre class="code prettyprint lang-js">
 *     console.log('Current directory: ' + process.cwd());
 * </pre>
 * @return {*}
 */
node.process.prototype.cwd = function() {
  return node.process.core_.cwd();
};

/**
 * Gets the user identity of the process. (See getuid(2).)
 * This is the numerical userid, not the username.
 * <pre class="code prettyprint lang-js">
 *     console.log('Current uid: ' + process.getuid());
 * </pre>
 * @return {*}
 */
node.process.prototype.getuid = function() {
  return node.process.core_.getuid();
};

/**
 * Sets the user identity of the process. (See setuid(2).)  This accepts either
 * a numerical ID or a username string.  If a username is specified, this method
 * blocks while resolving it to a numerical ID.
 * <pre class="code prettyprint lang-js">
 *     console.log('Current uid: ' + process.getuid());
 *     try {
 *       process.setuid(501);
 *       console.log('New uid: ' + process.getuid());
 *     }
 *     catch (err) {
 *       console.log('Failed to set uid: ' + err);
 *     }
 * </pre>
 * @return {*}
 */
node.process.prototype.setuid = function() {
  return node.process.core_.setuid();
};

/**
 * Sets the group identity of the process. (See setgid(2).)  This accepts either
 * a numerical ID or a groupname string. If a groupname is specified, this method
 * blocks while resolving it to a numerical ID.
 * <pre class="code prettyprint lang-js">
 *     console.log('Current gid: ' + process.getgid());
 *     try {
 *       process.setgid(501);
 *       console.log('New gid: ' + process.getgid());
 *     }
 *     catch (err) {
 *       console.log('Failed to set gid: ' + err);
 *     }
 * </pre>
 * @return {*}
 */
node.process.prototype.setgid = function() {
  return node.process.core_.setgid();
};

/**
 * Gets the group identity of the process. (See getgid(2).)
 * This is the numerical group id, not the group name.
 * <pre class="code prettyprint lang-js">
 *     console.log('Current gid: ' + process.getgid());
 * </pre>
 * @return {*}
 */
node.process.prototype.getgid = function() {
  return node.process.core_.getgid();
};

/**
 * Sets or reads the process's file mode creation mask. Child processes inherit
 * the mask from the parent process. Returns the old mask if `mask` argument is
 * given, otherwise returns the current mask.
 * <pre class="code prettyprint lang-js">
 *     var oldmask, newmask = 0644;
 *
 *     oldmask = process.umask(newmask);
 *     console.log('Changed umask from: ' + oldmask.toString(8) +
 *                 ' to ' + newmask.toString(8));
 * </pre>
 * @return {*}
 */
node.process.prototype.umask = function() {
  return node.process.core_.umask();
};

/**
 * @return {*}
 */
node.process.prototype.dlopen = function() {
  return node.process.core_.dlopen();
};

/**
 * Returns an object describing the memory usage of the Node process.
 * <pre class="code prettyprint lang-js">
 *     var util = require('util');
 *
 *     console.log(util.inspect(process.memoryUsage()));
 * </pre>
 * This will generate:
 * <pre class="code prettyprint lang-js">
 *     { rss: 4935680,
 *       vsize: 41893888,
 *       heapTotal: 1826816,
 *       heapUsed: 650472 }
 * </pre>
 * `heapTotal` and `heapUsed` refer to V8's memory usage.
 * @return {*}
 */
node.process.prototype.memoryUsage = function() {
  return node.process.core_.memoryUsage();
};

/**
 * @return {*}
 */
node.process.prototype.binding = function() {
  return node.process.core_.binding();
};

/**
 * @return {*}
 */
node.process.prototype.assert = function() {
  return node.process.core_.assert();
};

/**
 * On the next loop around the event loop call this callback.
 * This is *not* a simple alias to `setTimeout(fn, 0)`, it's much more
 * efficient.
 * <pre class="code prettyprint lang-js">
 *     process.nextTick(function () {
 *       console.log('nextTick callback');
 *     });
 * </pre>
 * @param {*} callback
 * @return {*}
 */
node.process.prototype.nextTick = function(callback) {
  return node.process.core_.nextTick(callback);
};

/**
 * @return {*}
 */
node.process.prototype.openStdin = function() {
  return node.process.core_.openStdin();
};

/**
 * Ends the process with the specified `code`.  If omitted, exit uses the
 * 'success' code `0`.
 *
 * To exit with a 'failure' code:
 * <pre class="code prettyprint lang-js">
 *     process.exit(1);
 * </pre>
 * The shell that executed node should see the exit code as 1.
 * @param {*} code
 * @return {*}
 */
node.process.prototype.exit = function(code) {
  return node.process.core_.exit(code);
};

/**
 * Send a signal to a process. `pid` is the process id and `signal` is the
 * string describing the signal to send.  Signal names are strings like
 * 'SIGINT' or 'SIGUSR1'.  If omitted, the signal will be 'SIGTERM'.
 * See kill(2) for more information.
 *
 * Note that just because the name of this function is `process.kill`, it is
 * really just a signal sender, like the `kill` system call.  The signal sent
 * may do something other than kill the target process.
 *
 * Example of sending a signal to yourself:
 * <pre class="code prettyprint lang-js">
 *     process.on('SIGHUP', function () {
 *       console.log('Got SIGHUP signal.');
 *     });
 *
 *     setTimeout(function () {
 *       console.log('Exiting.');
 *       process.exit(0);
 *     }, 100);
 *
 *     process.kill(process.pid, 'SIGHUP');
 * </pre>
 * @param {*} pid
 * @param {*} sig
 * @return {*}
 */
node.process.prototype.kill = function(pid, sig) {
  return node.process.core_.kill(pid, sig);
};

/**
 * @param {*} type
 * @param {*} listener
 * @return {*}
 */
node.process.prototype.addListener = function(type, listener) {
  return node.process.core_.addListener(type, listener);
};

/**
 * @param {*} type
 * @param {*} listener
 * @return {*}
 */
node.process.prototype.on = function(type, listener) {
  return node.process.core_.on(type, listener);
};

/**
 * @param {*} type
 * @param {*} listener
 * @return {*}
 */
node.process.prototype.removeListener = function(type, listener) {
  return node.process.core_.removeListener(type, listener);
};

/**
 * @return {*}
 */
node.process.prototype.debug = function() {
  return node.process.core_.debug();
};

/**
 * @return {*}
 */
node.process.prototype.error = function() {
  return node.process.core_.error();
};

/**
 * @return {*}
 */
node.process.prototype.watchFile = function() {
  return node.process.core_.watchFile();
};

/**
 * @return {*}
 */
node.process.prototype.unwatchFile = function() {
  return node.process.core_.unwatchFile();
};

/**
 * @return {*}
 */
node.process.prototype.mixin = function() {
  return node.process.core_.mixin();
};

/**
 * @return {*}
 */
node.process.prototype.createChildProcess = function() {
  return node.process.core_.createChildProcess();
};

/**
 * @return {*}
 */
node.process.prototype.inherits = function() {
  return node.process.core_.inherits();
};

/**
 * @param {*} n
 * @return {*}
 */
node.process.prototype.setMaxListeners = function(n) {
  return node.process.core_.setMaxListeners(n);
};

/**
 * @param {*} type
 * @return {*}
 */
node.process.prototype.emit = function(type) {
  return node.process.core_.emit(type);
};

/**
 * @param {*} type
 * @param {*} listener
 * @return {*}
 */
node.process.prototype.once = function(type, listener) {
  return node.process.core_.once(type, listener);
};

/**
 * @param {*} type
 * @return {*}
 */
node.process.prototype.removeAllListeners = function(type) {
  return node.process.core_.removeAllListeners(type);
};

/**
 * @param {*} type
 * @return {*}
 */
node.process.prototype.listeners = function(type) {
  return node.process.core_.listeners(type);
};


/**
 * @private
 * @type {*}
 */
node.process.core_ = process;