#!/usr/local/bin/node

require('nclosure').nclosure();

goog.provide('ncnode.lib.compileall');

ncnode.lib.compileall = function() {
  process.chdir('node_wrappers');
  var files = goog.array.filter(require('fs').readdirSync('.'),
    function(f) { return f.indexOf('.js') > 0 && f !== 'deps.js'; });
  this.compileFiles_(files);
};

ncnode.lib.compileall.prototype.compileFiles_ = function(files) {
  if (files.length === 0) return;
  var file = files.pop();
  var that = this;
  this.compileFile_(file, function() {
    that.compileFiles_(files);
  });
};

ncnode.lib.compileall.prototype.compileFile_ = function(f, callback) {
  console.error('COMPILING: ' + f);
  require('child_process').exec('nccompile ' + f,
      function(err, stdout, stderr) {
        if (stderr.indexOf('0 error(s), 0 warning(s)') >= 0) return callback();
        if (err) { console.error(err.stack); }
        if (stderr) { console.error(stderr); }
        if (stdout) { console.error(stdout); }
        callback();
  });
};

new ncnode.lib.compileall(); // Go
