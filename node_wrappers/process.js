
goog.provide("process");

/**
 * @fileoverview The `process` object is a global object and can be accessed from anywhere.
 * It is an instance of `EventEmitter`.
 */

/**
 * Getter&#47;setter to set what is displayed in 'ps'.
 * @type {*}
 */
process.prototype.title;

/**
 * A compiled-in property that exposes `NODE_VERSION`.
 * <pre>
 *     console.log('Version: ' + process.version);
 * </pre>
 * @type {*}
 */
process.prototype.version;

/**
 * A compiled-in property that exposes `NODE_PREFIX`.
 * <pre>
 *     console.log('Prefix: ' + process.installPrefix);
 * </pre>
 * @type {*}
 */
process.prototype.installPrefix;

/**
 * @type {*}
 */
process.prototype.versions;

/**
 * What platform you're running on. `'linux2'`, `'darwin'`, etc.
 * <pre>
 *     console.log('This platform is ' + process.platform);
 * </pre>
 * @type {*}
 */
process.prototype.platform;

/**
 * @type {*}
 */
process.prototype.ARGV;

/**
 * An array containing the command line arguments.  The first element will be
 * 'node', the second element will be the name of the JavaScript file.  The
 * next elements will be any additional command line arguments.
 * <pre>
 *     &#47;&#47; print process.argv
 *     process.argv.forEach(function (val, index, array) {
 *       console.log(index + ': ' + val);
 *     });
 * </pre>
 * This will generate:
 * <pre>
 *     $ node process-2.js one two=three four
 *     0: node
 *     1: &#47;Users&#47;mjr&#47;work&#47;node&#47;process-2.js
 *     2: one
 *     3: two=three
 *     4: four
 * </pre>
 * @type {*}
 */
process.prototype.argv;

/**
 * An object containing the user environment. See environ(7).
 * @type {*}
 */
process.prototype.env;

/**
 * @type {*}
 */
process.prototype.ENV;

/**
 * The PID of the process.
 * <pre>
 *     console.log('This process is pid ' + process.pid);
 * </pre>
 * @type {*}
 */
process.prototype.pid;

/**
 * This is the absolute pathname of the executable that started the process.
 *
 * Example:
 * <pre>
 *     &#47;usr&#47;local&#47;bin&#47;node
 * </pre>
 * @type {*}
 */
process.prototype.execPath;

/**
 * A `Writable Stream` to `stdout`.
 *
 * Example: the definition of `console.log`
 * <pre>
 *     console.log = function (d) {
 *       process.stdout.write(d + '\n');
 *     };
 * </pre>
 * @type {*}
 */
process.prototype.stdout;

/**
 * A `Readable Stream` for stdin. The stdin stream is paused by default, so one
 * must call `process.stdin.resume()` to read from it.
 *
 * Example of opening standard input and listening for both events:
 * <pre>
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
process.prototype.stdin;

/**
 * @type {*}
 */
process.prototype.mainModule;

/**
 * @return {*}
 */
process.prototype.compile = function() {
  return process.core.compile();
};

/**
 * @return {*}
 */
process.prototype.reallyExit = function() {
  return process.core.reallyExit();
};

/**
 * Changes the current working directory of the process or throws an exception if that fails.
 * <pre>
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
process.prototype.chdir = function() {
  return process.core.chdir();
};

/**
 * Returns the current working directory of the process.
 * <pre>
 *     console.log('Current directory: ' + process.cwd());
 * </pre>
 * @return {*}
 */
process.prototype.cwd = function() {
  return process.core.cwd();
};

/**
 * Gets the user identity of the process. (See getuid(2).)
 * This is the numerical userid, not the username.
 * <pre>
 *     console.log('Current uid: ' + process.getuid());
 * </pre>
 * @return {*}
 */
process.prototype.getuid = function() {
  return process.core.getuid();
};

/**
 * Sets the user identity of the process. (See setuid(2).)  This accepts either
 * a numerical ID or a username string.  If a username is specified, this method
 * blocks while resolving it to a numerical ID.
 * <pre>
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
process.prototype.setuid = function() {
  return process.core.setuid();
};

/**
 * Sets the group identity of the process. (See setgid(2).)  This accepts either
 * a numerical ID or a groupname string. If a groupname is specified, this method
 * blocks while resolving it to a numerical ID.
 * <pre>
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
process.prototype.setgid = function() {
  return process.core.setgid();
};

/**
 * Gets the group identity of the process. (See getgid(2).)
 * This is the numerical group id, not the group name.
 * <pre>
 *     console.log('Current gid: ' + process.getgid());
 * </pre>
 * @return {*}
 */
process.prototype.getgid = function() {
  return process.core.getgid();
};

/**
 * Sets or reads the process's file mode creation mask. Child processes inherit
 * the mask from the parent process. Returns the old mask if `mask` argument is
 * given, otherwise returns the current mask.
 * <pre>
 *     var oldmask, newmask = 0644;
 *
 *     oldmask = process.umask(newmask);
 *     console.log('Changed umask from: ' + oldmask.toString(8) +
 *                 ' to ' + newmask.toString(8));
 * </pre>
 * @return {*}
 */
process.prototype.umask = function() {
  return process.core.umask();
};

/**
 * @return {*}
 */
process.prototype.dlopen = function() {
  return process.core.dlopen();
};

/**
 * Returns an object describing the memory usage of the Node process.
 * <pre>
 *     var util = require('util');
 *
 *     console.log(util.inspect(process.memoryUsage()));
 * </pre>
 * This will generate:
 * <pre>
 *     { rss: 4935680,
 *       vsize: 41893888,
 *       heapTotal: 1826816,
 *       heapUsed: 650472 }
 * </pre>
 * `heapTotal` and `heapUsed` refer to V8's memory usage.
 * @return {*}
 */
process.prototype.memoryUsage = function() {
  return process.core.memoryUsage();
};

/**
 * @return {*}
 */
process.prototype.binding = function() {
  return process.core.binding();
};

/**
 * @return {*}
 */
process.prototype.assert = function() {
  return process.core.assert();
};

/**
 * On the next loop around the event loop call this callback.
 * This is *not* a simple alias to `setTimeout(fn, 0)`, it's much more
 * efficient.
 * <pre>
 *     process.nextTick(function () {
 *       console.log('nextTick callback');
 *     });
 * </pre>
 * @param {*} callback
 * @return {*}
 */
process.prototype.nextTick = function(callback) {
  return process.core.nextTick(callback);
};

/**
 * @return {*}
 */
process.prototype.openStdin = function() {
  return process.core.openStdin();
};

/**
 * Ends the process with the specified `code`.  If omitted, exit uses the
 * 'success' code `0`.
 *
 * To exit with a 'failure' code:
 * <pre>
 *     process.exit(1);
 * </pre>
 * The shell that executed node should see the exit code as 1.
 * @param {*} code
 * @return {*}
 */
process.prototype.exit = function(code) {
  return process.core.exit(code);
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
 * <pre>
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
process.prototype.kill = function(pid, sig) {
  return process.core.kill(pid, sig);
};

/**
 * @param {*} type
 * @param {*} listener
 * @return {*}
 */
process.prototype.addListener = function(type, listener) {
  return process.core.addListener(type, listener);
};

/**
 * @param {*} type
 * @param {*} listener
 * @return {*}
 */
process.prototype.on = function(type, listener) {
  return process.core.on(type, listener);
};

/**
 * @param {*} type
 * @param {*} listener
 * @return {*}
 */
process.prototype.removeListener = function(type, listener) {
  return process.core.removeListener(type, listener);
};

/**
 * @return {*}
 */
process.prototype.debug = function() {
  return process.core.debug();
};

/**
 * @return {*}
 */
process.prototype.error = function() {
  return process.core.error();
};

/**
 * @return {*}
 */
process.prototype.watchFile = function() {
  return process.core.watchFile();
};

/**
 * @return {*}
 */
process.prototype.unwatchFile = function() {
  return process.core.unwatchFile();
};

/**
 * @return {*}
 */
process.prototype.mixin = function() {
  return process.core.mixin();
};

/**
 * @return {*}
 */
process.prototype.createChildProcess = function() {
  return process.core.createChildProcess();
};

/**
 * @return {*}
 */
process.prototype.inherits = function() {
  return process.core.inherits();
};

/**
 * @param {*} n
 * @return {*}
 */
process.prototype.setMaxListeners = function(n) {
  return process.core.setMaxListeners(n);
};

/**
 * @param {*} type
 * @return {*}
 */
process.prototype.emit = function(type) {
  return process.core.emit(type);
};

/**
 * @param {*} type
 * @param {*} listener
 * @return {*}
 */
process.prototype.once = function(type, listener) {
  return process.core.once(type, listener);
};

/**
 * @param {*} type
 * @return {*}
 */
process.prototype.removeAllListeners = function(type) {
  return process.core.removeAllListeners(type);
};

/**
 * @param {*} type
 * @return {*}
 */
process.prototype.listeners = function(type) {
  return process.core.listeners(type);
};


process.core = process;