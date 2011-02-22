/**
 * @name node.fs
 * @namespace
 * File I&#47;O is provided by simple wrappers around standard POSIX functions.  To
 * use this module do `require('fs')`. All the methods have asynchronous and
 * synchronous forms.
 *
 * The asynchronous form always take a completion callback as its last argument.
 * The arguments passed to the completion callback depend on the method, but the
 * first argument is always reserved for an exception. If the operation was
 * completed successfully, then the first argument will be `null` or `undefined`.
 *
 * Here is an example of the asynchronous version:
 * <pre>
 *     var fs = require('fs');
 *
 *     fs.unlink('&#47;tmp&#47;hello', function (err) {
 *       if (err) throw err;
 *       console.log('successfully deleted &#47;tmp&#47;hello');
 *     });
 * </pre>
 * Here is the synchronous version:
 * <pre>
 *     var fs = require('fs');
 *
 *     fs.unlinkSync('&#47;tmp&#47;hello')
 *     console.log('successfully deleted &#47;tmp&#47;hello');
 * </pre>
 * With the asynchronous methods there is no guaranteed ordering. So the
 * following is prone to error:
 * <pre>
 *     fs.rename('&#47;tmp&#47;hello', '&#47;tmp&#47;world', function (err) {
 *       if (err) throw err;
 *       console.log('renamed complete');
 *     });
 *     fs.stat('&#47;tmp&#47;world', function (err, stats) {
 *       if (err) throw err;
 *       console.log('stats: ' + JSON.stringify(stats));
 *     });
 * </pre>
 * It could be that `fs.stat` is executed before `fs.rename`.
 * The correct way to do this is to chain the callbacks.
 * <pre>
 *     fs.rename('&#47;tmp&#47;hello', '&#47;tmp&#47;world', function (err) {
 *       if (err) throw err;
 *       fs.stat('&#47;tmp&#47;world', function (err, stats) {
 *         if (err) throw err;
 *         console.log('stats: ' + JSON.stringify(stats));
 *       });
 *     });
 * </pre>
 * In busy processes, the programmer is _strongly encouraged_ to use the
 * asynchronous versions of these calls. The synchronous versions will block
 * the entire process until they complete--halting all connections.
 */

goog.provide("node.fs");

/**
 * Asynchronously reads the entire contents of a file. Example:
 * <pre>
 *     fs.readFile('&#47;etc&#47;passwd', function (err, data) {
 *       if (err) throw err;
 *       console.log(data);
 *     });
 * </pre>
 * The callback is passed two arguments `(err, data)`, where `data` is the
 * contents of the file.
 *
 * If no encoding is specified, then the raw buffer is returned.
 * @param {*} path
 * @param {*} encoding_
 * @return {*}
 */
node.fs.prototype.readFile = function(path, encoding_) {
  return node.fs.core_.readFile(path, encoding_);
};

/**
 * Synchronous version of `fs.readFile`. Returns the contents of the `filename`.
 *
 * If `encoding` is specified then this function returns a string. Otherwise it
 * returns a buffer.
 * @param {*} path
 * @param {*} encoding
 * @return {*}
 */
node.fs.prototype.readFileSync = function(path, encoding) {
  return node.fs.core_.readFileSync(path, encoding);
};

/**
 * Asynchronous close(2).  No arguments other than a possible exception are given
 * to the completion callback.
 * @param {*} fd
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.close = function(fd, callback) {
  return node.fs.core_.close(fd, callback);
};

/**
 * Synchronous close(2).
 * @param {*} fd
 * @return {*}
 */
node.fs.prototype.closeSync = function(fd) {
  return node.fs.core_.closeSync(fd);
};

/**
 * Asynchronous file open. See open(2). Flags can be 'r', 'r+', 'w', 'w+', 'a',
 * or 'a+'. The callback gets two arguments `(err, fd)`.
 * @param {*} path
 * @param {*} flags
 * @param {*} mode_
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.open = function(path, flags, mode_, callback) {
  return node.fs.core_.open(path, flags, mode_, callback);
};

/**
 * Synchronous open(2).
 * @param {*} path
 * @param {*} flags
 * @param {*} mode
 * @return {*}
 */
node.fs.prototype.openSync = function(path, flags, mode) {
  return node.fs.core_.openSync(path, flags, mode);
};

/**
 * Read data from the file specified by `fd`.
 *
 * `buffer` is the buffer that the data will be written to.
 *
 * `offset` is offset within the buffer where writing will start.
 *
 * `length` is an integer specifying the number of bytes to read.
 *
 * `position` is an integer specifying where to begin reading from in the file.
 * If `position` is `null`, data will be read from the current file position.
 *
 * The callback is given the two arguments, `(err, bytesRead)`.
 * @param {*} fd
 * @param {*} buffer
 * @param {*} offset
 * @param {*} length
 * @param {*} position
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.read = function(fd, buffer, offset, length, position, callback) {
  return node.fs.core_.read(fd, buffer, offset, length, position, callback);
};

/**
 * Synchronous version of string-based `fs.read`. Returns the number of
 * `bytesRead`.
 * @param {*} fd
 * @param {*} buffer
 * @param {*} offset
 * @param {*} length
 * @param {*} position
 * @return {*}
 */
node.fs.prototype.readSync = function(fd, buffer, offset, length, position) {
  return node.fs.core_.readSync(fd, buffer, offset, length, position);
};

/**
 * Write `buffer` to the file specified by `fd`.
 *
 * `offset` and `length` determine the part of the buffer to be written.
 *
 * `position` refers to the offset from the beginning of the file where this data
 * should be written. If `position` is `null`, the data will be written at the
 * current position.
 * See pwrite(2).
 *
 * The callback will be given two arguments `(err, written)` where `written`
 * specifies how many _bytes_ were written.
 * @param {*} fd
 * @param {*} buffer
 * @param {*} offset
 * @param {*} length
 * @param {*} position
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.write = function(fd, buffer, offset, length, position, callback) {
  return node.fs.core_.write(fd, buffer, offset, length, position, callback);
};

/**
 * Synchronous version of string-based `fs.write()`. Returns the number of bytes
 * written.
 * @param {*} fd
 * @param {*} buffer
 * @param {*} offset
 * @param {*} length
 * @param {*} position
 * @return {*}
 */
node.fs.prototype.writeSync = function(fd, buffer, offset, length, position) {
  return node.fs.core_.writeSync(fd, buffer, offset, length, position);
};

/**
 * Asynchronous rename(2). No arguments other than a possible exception are given
 * to the completion callback.
 * @param {*} oldPath
 * @param {*} newPath
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.rename = function(oldPath, newPath, callback) {
  return node.fs.core_.rename(oldPath, newPath, callback);
};

/**
 * Synchronous rename(2).
 * @param {*} oldPath
 * @param {*} newPath
 * @return {*}
 */
node.fs.prototype.renameSync = function(oldPath, newPath) {
  return node.fs.core_.renameSync(oldPath, newPath);
};

/**
 * Asynchronous ftruncate(2). No arguments other than a possible exception are
 * given to the completion callback.
 * @param {*} fd
 * @param {*} len
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.truncate = function(fd, len, callback) {
  return node.fs.core_.truncate(fd, len, callback);
};

/**
 * Synchronous ftruncate(2).
 * @param {*} fd
 * @param {*} len
 * @return {*}
 */
node.fs.prototype.truncateSync = function(fd, len) {
  return node.fs.core_.truncateSync(fd, len);
};

/**
 * Asynchronous rmdir(2). No arguments other than a possible exception are given
 * to the completion callback.
 * @param {*} path
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.rmdir = function(path, callback) {
  return node.fs.core_.rmdir(path, callback);
};

/**
 * Synchronous rmdir(2).
 * @param {*} path
 * @return {*}
 */
node.fs.prototype.rmdirSync = function(path) {
  return node.fs.core_.rmdirSync(path);
};

/**
 * @param {*} fd
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.fdatasync = function(fd, callback) {
  return node.fs.core_.fdatasync(fd, callback);
};

/**
 * @param {*} fd
 * @return {*}
 */
node.fs.prototype.fdatasyncSync = function(fd) {
  return node.fs.core_.fdatasyncSync(fd);
};

/**
 * @param {*} fd
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.fsync = function(fd, callback) {
  return node.fs.core_.fsync(fd, callback);
};

/**
 * @param {*} fd
 * @return {*}
 */
node.fs.prototype.fsyncSync = function(fd) {
  return node.fs.core_.fsyncSync(fd);
};

/**
 * Asynchronous mkdir(2). No arguments other than a possible exception are given
 * to the completion callback.
 * @param {*} path
 * @param {*} mode
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.mkdir = function(path, mode, callback) {
  return node.fs.core_.mkdir(path, mode, callback);
};

/**
 * Synchronous mkdir(2).
 * @param {*} path
 * @param {*} mode
 * @return {*}
 */
node.fs.prototype.mkdirSync = function(path, mode) {
  return node.fs.core_.mkdirSync(path, mode);
};

/**
 * @param {*} outFd
 * @param {*} inFd
 * @param {*} inOffset
 * @param {*} length
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.sendfile = function(outFd, inFd, inOffset, length, callback) {
  return node.fs.core_.sendfile(outFd, inFd, inOffset, length, callback);
};

/**
 * @param {*} outFd
 * @param {*} inFd
 * @param {*} inOffset
 * @param {*} length
 * @return {*}
 */
node.fs.prototype.sendfileSync = function(outFd, inFd, inOffset, length) {
  return node.fs.core_.sendfileSync(outFd, inFd, inOffset, length);
};

/**
 * Asynchronous readdir(3).  Reads the contents of a directory.
 * The callback gets two arguments `(err, files)` where `files` is an array of
 * the names of the files in the directory excluding `'.'` and `'..'`.
 * @param {*} path
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.readdir = function(path, callback) {
  return node.fs.core_.readdir(path, callback);
};

/**
 * Synchronous readdir(3). Returns an array of filenames excluding `'.'` and
 * `'..'`.
 * @param {*} path
 * @return {*}
 */
node.fs.prototype.readdirSync = function(path) {
  return node.fs.core_.readdirSync(path);
};

/**
 * Asynchronous fstat(2). The callback gets two arguments `(err, stats)` where
 * `stats` is a `fs.Stats` object.
 * @param {*} fd
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.fstat = function(fd, callback) {
  return node.fs.core_.fstat(fd, callback);
};

/**
 * Asynchronous lstat(2). The callback gets two arguments `(err, stats)` where
 * `stats` is a `fs.Stats` object. lstat() is identical to stat(), except that if
 * path is a symbolic link, then the link itself is stat-ed, not the file that it
 * refers to.
 * @param {*} path
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.lstat = function(path, callback) {
  return node.fs.core_.lstat(path, callback);
};

/**
 * Asynchronous stat(2). The callback gets two arguments `(err, stats)` where
 * `stats` is a `fs.Stats` object. It looks like this:
 * <pre>
 *     { dev: 2049,
 *       ino: 305352,
 *       mode: 16877,
 *       nlink: 12,
 *       uid: 1000,
 *       gid: 1000,
 *       rdev: 0,
 *       size: 4096,
 *       blksize: 4096,
 *       blocks: 8,
 *       atime: '2009-06-29T11:11:55Z',
 *       mtime: '2009-06-29T11:11:40Z',
 *       ctime: '2009-06-29T11:11:40Z' }
 * </pre>
 * See the `fs.Stats` section below for more information.
 * @param {*} path
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.stat = function(path, callback) {
  return node.fs.core_.stat(path, callback);
};

/**
 * Synchronous fstat(2). Returns an instance of `fs.Stats`.
 * @param {*} fd
 * @return {*}
 */
node.fs.prototype.fstatSync = function(fd) {
  return node.fs.core_.fstatSync(fd);
};

/**
 * Synchronous lstat(2). Returns an instance of `fs.Stats`.
 * @param {*} path
 * @return {*}
 */
node.fs.prototype.lstatSync = function(path) {
  return node.fs.core_.lstatSync(path);
};

/**
 * Synchronous stat(2). Returns an instance of `fs.Stats`.
 * @param {*} path
 * @return {*}
 */
node.fs.prototype.statSync = function(path) {
  return node.fs.core_.statSync(path);
};

/**
 * Asynchronous readlink(2). The callback gets two arguments `(err,
 * resolvedPath)`.
 * @param {*} path
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.readlink = function(path, callback) {
  return node.fs.core_.readlink(path, callback);
};

/**
 * Synchronous readlink(2). Returns the resolved path.
 * @param {*} path
 * @return {*}
 */
node.fs.prototype.readlinkSync = function(path) {
  return node.fs.core_.readlinkSync(path);
};

/**
 * Asynchronous symlink(2). No arguments other than a possible exception are given
 * to the completion callback.
 * @param {*} destination
 * @param {*} path
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.symlink = function(destination, path, callback) {
  return node.fs.core_.symlink(destination, path, callback);
};

/**
 * Synchronous symlink(2).
 * @param {*} destination
 * @param {*} path
 * @return {*}
 */
node.fs.prototype.symlinkSync = function(destination, path) {
  return node.fs.core_.symlinkSync(destination, path);
};

/**
 * Asynchronous link(2). No arguments other than a possible exception are given to
 * the completion callback.
 * @param {*} srcpath
 * @param {*} dstpath
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.link = function(srcpath, dstpath, callback) {
  return node.fs.core_.link(srcpath, dstpath, callback);
};

/**
 * Synchronous link(2).
 * @param {*} srcpath
 * @param {*} dstpath
 * @return {*}
 */
node.fs.prototype.linkSync = function(srcpath, dstpath) {
  return node.fs.core_.linkSync(srcpath, dstpath);
};

/**
 * Asynchronous unlink(2). No arguments other than a possible exception are given
 * to the completion callback.
 * @param {*} path
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.unlink = function(path, callback) {
  return node.fs.core_.unlink(path, callback);
};

/**
 * Synchronous unlink(2).
 * @param {*} path
 * @return {*}
 */
node.fs.prototype.unlinkSync = function(path) {
  return node.fs.core_.unlinkSync(path);
};

/**
 * Asynchronous chmod(2). No arguments other than a possible exception are given
 * to the completion callback.
 * @param {*} path
 * @param {*} mode
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.chmod = function(path, mode, callback) {
  return node.fs.core_.chmod(path, mode, callback);
};

/**
 * Synchronous chmod(2).
 * @param {*} path
 * @param {*} mode
 * @return {*}
 */
node.fs.prototype.chmodSync = function(path, mode) {
  return node.fs.core_.chmodSync(path, mode);
};

/**
 * @param {*} path
 * @param {*} uid
 * @param {*} gid
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.chown = function(path, uid, gid, callback) {
  return node.fs.core_.chown(path, uid, gid, callback);
};

/**
 * @param {*} path
 * @param {*} uid
 * @param {*} gid
 * @return {*}
 */
node.fs.prototype.chownSync = function(path, uid, gid) {
  return node.fs.core_.chownSync(path, uid, gid);
};

/**
 * Asynchronously writes data to a file. `data` can be a string or a buffer.
 *
 * Example:
 * <pre>
 *     fs.writeFile('message.txt', 'Hello Node', function (err) {
 *       if (err) throw err;
 *       console.log('It\'s saved!');
 *     });
 * </pre>
 * @param {*} path
 * @param {*} data
 * @param {*} encoding_
 * @param {*} callback
 * @return {*}
 */
node.fs.prototype.writeFile = function(path, data, encoding_, callback) {
  return node.fs.core_.writeFile(path, data, encoding_, callback);
};

/**
 * The synchronous version of `fs.writeFile`.
 * @param {*} path
 * @param {*} data
 * @param {*} encoding
 * @return {*}
 */
node.fs.prototype.writeFileSync = function(path, data, encoding) {
  return node.fs.core_.writeFileSync(path, data, encoding);
};

/**
 * Watch for changes on `filename`. The callback `listener` will be called each
 * time the file changes.
 *
 * The second argument is optional. The `options` if provided should be an object
 * containing two members a boolean, `persistent`, and `interval`, a polling
 * value in milliseconds. The default is `{persistent: true, interval: 0}`.
 *
 * The `listener` gets two arguments the current stat object and the previous
 * stat object:
 * <pre>
 *     fs.watchFile(f, function (curr, prev) {
 *       console.log('the current mtime is: ' + curr.mtime);
 *       console.log('the previous mtime was: ' + prev.mtime);
 *     });
 * </pre>
 * These stat objects are instances of `fs.Stat`.
 * @param {*} filename
 * @return {*}
 */
node.fs.prototype.watchFile = function(filename) {
  return node.fs.core_.watchFile(filename);
};

/**
 * Stop watching for changes on `filename`.
 * @param {*} filename
 * @return {*}
 */
node.fs.prototype.unwatchFile = function(filename) {
  return node.fs.core_.unwatchFile(filename);
};

/**
 * Synchronous realpath(2). Returns the resolved path.
 * @param {*} p
 * @return {*}
 */
node.fs.prototype.realpathSync = function(p) {
  return node.fs.core_.realpathSync(p);
};

/**
 * Asynchronous realpath(2).  The callback gets two arguments `(err,
 * resolvedPath)`.
 * @param {*} p
 * @param {*} cb
 * @return {*}
 */
node.fs.prototype.realpath = function(p, cb) {
  return node.fs.core_.realpath(p, cb);
};

/**
 * @param {*} path
 * @param {*} options
 * @return {*}
 */
node.fs.prototype.createReadStream = function(path, options) {
  return node.fs.core_.createReadStream(path, options);
};

/**
 * @param {*} path
 * @param {*} options
 * @return {*}
 */
node.fs.prototype.createWriteStream = function(path, options) {
  return node.fs.core_.createWriteStream(path, options);
};


/**
 * @private
 * @type {*}
 */
node.fs.core_ = require("fs");