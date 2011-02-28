#!/usr/local/bin/node

require('nclosure').nclosure();

goog.provide('ncnode.examples.fsnamespace');

goog.require('node.fs');


ncnode.examples.fsnamespace = function() {
  // Ensure that node.js was imported correctly with goog.require('node.fs')
  // above.
  var files = node.fs.readdirSync(__dirname);
  console.log('files: ' + files);
};

new ncnode.examples.fsnamespace(); // Go!