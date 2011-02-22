/**
 * @name node.path
 * @namespace
 * This module contains utilities for dealing with file paths.  Use
 * `require('path')` to use it.  It provides the following methods:
 */

goog.provide("node.path");

/**
 * Resolves `to` to an absolute path.
 *
 * If `to` isn't already absolute `from` arguments are prepended in right to left
 * order, until an absolute path is found. If after using all `from` paths still
 * no absolute path is found, the current working directory is used as well. The
 * resulting path is normalized, and trailing slashes are removed unless the path
 * gets resolved to the root directory.
 *
 * Another way to think of it is as a sequence of `cd` commands in a shell.
 * <pre>
 *     path.resolve('foo&#47;bar', '&#47;tmp&#47;file&#47;', '..', 'a&#47;..&#47;subfile')
 * </pre>
 * Is similar to:
 * <pre>
 *     cd foo&#47;bar
 *     cd &#47;tmp&#47;file&#47;
 *     cd ..
 *     cd a&#47;..&#47;subfile
 *     pwd
 * </pre>
 * The difference is that the different paths don't need to exist and may also be
 * files.
 *
 * Examples:
 * <pre>
 *     path.resolve('&#47;foo&#47;bar', '.&#47;baz')
 *     &#47;&#47; returns
 *     '&#47;foo&#47;bar&#47;baz'
 *
 *     path.resolve('&#47;foo&#47;bar', '&#47;tmp&#47;file&#47;')
 *     &#47;&#47; returns
 *     '&#47;tmp&#47;file'
 *
 *     path.resolve('wwwroot', 'static_files&#47;png&#47;', '..&#47;gif&#47;image.gif')
 *     &#47;&#47; if currently in &#47;home&#47;myself&#47;node, it returns
 *     '&#47;home&#47;myself&#47;node&#47;wwwroot&#47;static_files&#47;gif&#47;image.gif'
 * </pre>
 * @return {*}
 */
node.path.prototype.resolve = function() {
  return node.path.core_.resolve();
};

/**
 * Normalize a string path, taking care of `'..'` and `'.'` parts.
 *
 * When multiple slashes are found, they're replaces by a single one;
 * when the path contains a trailing slash, it is preserved.
 * On windows backslashes are used.
 *
 * Example:
 * <pre>
 *     path.normalize('&#47;foo&#47;bar&#47;&#47;baz&#47;asdf&#47;quux&#47;..')
 *     &#47;&#47; returns
 *     '&#47;foo&#47;bar&#47;baz&#47;asdf'
 * </pre>
 * @param {*} path
 * @return {*}
 */
node.path.prototype.normalize = function(path) {
  return node.path.core_.normalize(path);
};

/**
 * Join all arguments together and normalize the resulting path.
 *
 * Example:
 * <pre>
 *     node> require('path').join(
 *     ...   '&#47;foo', 'bar', 'baz&#47;asdf', 'quux', '..')
 *     '&#47;foo&#47;bar&#47;baz&#47;asdf'
 * </pre>
 * @return {*}
 */
node.path.prototype.join = function() {
  return node.path.core_.join();
};

/**
 * Return the directory name of a path.  Similar to the Unix `dirname` command.
 *
 * Example:
 * <pre>
 *     path.dirname('&#47;foo&#47;bar&#47;baz&#47;asdf&#47;quux')
 *     &#47;&#47; returns
 *     '&#47;foo&#47;bar&#47;baz&#47;asdf'
 * </pre>
 * @param {*} path
 * @return {*}
 */
node.path.prototype.dirname = function(path) {
  return node.path.core_.dirname(path);
};

/**
 * Return the last portion of a path.  Similar to the Unix `basename` command.
 *
 * Example:
 * <pre>
 *     path.basename('&#47;foo&#47;bar&#47;baz&#47;asdf&#47;quux.html')
 *     &#47;&#47; returns
 *     'quux.html'
 *
 *     path.basename('&#47;foo&#47;bar&#47;baz&#47;asdf&#47;quux.html', '.html')
 *     &#47;&#47; returns
 *     'quux'
 * </pre>
 * @param {*} path
 * @param {*} ext
 * @return {*}
 */
node.path.prototype.basename = function(path, ext) {
  return node.path.core_.basename(path, ext);
};

/**
 * Return the extension of the path.  Everything after the last '.' in the last portion
 * of the path.  If there is no '.' in the last portion of the path or the only '.' is
 * the first character, then it returns an empty string.  Examples:
 * <pre>
 *     path.extname('index.html')
 *     &#47;&#47; returns
 *     '.html'
 *
 *     path.extname('index')
 *     &#47;&#47; returns
 *     ''
 * </pre>
 * @param {*} path
 * @return {*}
 */
node.path.prototype.extname = function(path) {
  return node.path.core_.extname(path);
};

/**
 * Test whether or not the given path exists.  Then, call the `callback` argument
 * with either true or false. Example:
 * <pre>
 *     path.exists('&#47;etc&#47;passwd', function (exists) {
 *       util.debug(exists ? "it's there" : "no passwd!");
 *     });
 * @param {*} path
 * @param {*} callback
 * @return {*}
 */
node.path.prototype.exists = function(path, callback) {
  return node.path.core_.exists(path, callback);
};

/**
 * @param {*} path
 * @return {*}
 */
node.path.prototype.existsSync = function(path) {
  return node.path.core_.existsSync(path);
};


/**
 * @private
 * @type {*}
 */
node.path.core_ = require("path");