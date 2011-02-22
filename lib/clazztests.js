
goog.require('ncnode.lib.clazz');
goog.require('ncnode.lib.type');

goog.require('goog.testing.jsunit');
goog.require('goog.array');

var coreprefix = '\n\n\n/**\n * @private\n * @type {*}\n */\n';

function testBuildJSDoc_() {
  assertEquals_('/**\n * test\n */', ncnode.lib.clazz.buildJSDoc_(['test']));
};

function testEmptyClass() {
  var c = new ncnode.lib.clazz('ncnode.test.className');
  var exp = '\ngoog.provide("ncnode.test.className");' +
            coreprefix + 'ncnode.test.className.core_ = require("className");';

  assertEquals_(exp, c.toString());
};

function testEmptyClassWithOverview() {
  var c = new ncnode.lib.clazz('ncnode.test.className', 'foo');
  var exp = '\ngoog.provide("ncnode.test.className");\n\n/**\n * @fileoverview foo\n */' +
    coreprefix + 'ncnode.test.className.core_ = require("className");';
  assertEquals_(exp, c.toString());
};

function testConstructorWithNoDescAndNoArgs() {
  var c = new ncnode.lib.clazz('ncnode.test.className');
  c.createConstructor();
  assertEquals_('/**\n * @constructor\n */\nncnode.test.className = function() {};', c.constructor_);
};

function testConstructorWithNoDesc() {
  var c = new ncnode.lib.clazz('ncnode.test.className');
  c.createConstructor('desc');
  assertEquals_('/**\n * @constructor\n * desc\n */\nncnode.test.className = function() {};', c.constructor_);
};

function testConstructorWithArgs() {
  var c = new ncnode.lib.clazz('ncnode.test.className');
  c.createConstructor(null, [
    new ncnode.lib.type('type.ns', 'arg1'),
    new ncnode.lib.type('type.ns2', 'arg2', 'desc')
  ]);
  assertEquals_('/**\n * @constructor\n * @param {type.ns} arg1' +
               '\n * @param {type.ns2} arg2 desc\n */\nncnode.test.className = function() {};', c.constructor_);
};

function testConstructorWithDescAndArgs() {
  var c = new ncnode.lib.clazz('ncnode.test.className');
  c.createConstructor('desc', [
    new ncnode.lib.type('type.ns', 'arg1')
  ]);
  assertEquals_('/**\n * @constructor\n * desc\n * @param {type.ns} arg1\n */\nncnode.test.className = function() {};',
               c.constructor_);
};

function testAddAttribute() {
  var c = new ncnode.lib.clazz('c');
  var exp = '\ngoog.provide("c");\n' +
            '\n/**\n * @type {type.ns}\n */\nc.prototype.attr1;'+
            coreprefix + 'c.core_ = require("c");';
  c.addAttr('type.ns', 'attr1');
  assertEquals_(exp, c.toString());
};

function testAddMultipleAttribute() {
  var c = new ncnode.lib.clazz('c');
  var exp = '\ngoog.provide("c");\n' +
            '\n/**\n * @type {type.ns}\n */\nc.prototype.attr1;\n' +
            '\n/**\n * desc\n * @type {type.ns2}\n */\nc.prototype.attr2;\n' +
            '\n/**\n * desc3\n * @type {type.ns3}\n */\nc.attr3;' +
            coreprefix + 'c.core_ = require("c");';
  c.addAttr('type.ns', 'attr1');
  c.addAttr('type.ns2', 'attr2', 'desc');
  c.addAttr('type.ns3', 'attr3', 'desc3', true);
  assertEquals_(exp, c.toString());
};

function testAddFunct() {
  var c = new ncnode.lib.clazz('c');
  var exp = '\ngoog.provide("c");\n' +
            '\n/**\n *\n */\nc.prototype.functName = function() {' +
            '\n  return c.core_.functName();' +
            '\n};' +
            coreprefix + 'c.core_ = require("c");';
  c.addFunct('functName');
  assertEquals_(exp, c.toString());
};

function testAddFuncts() {
  var c = new ncnode.lib.clazz('c');
  var exp = '\ngoog.provide("c");\n' +

            '\n/**\n *\n */\nc.prototype.functName = function() {' +
            '\n  return c.core_.functName();' +
            '\n};\n' +

            '\n/**\n * desc2\n */\nc.prototype.functName2 = function() {' +
            '\n  return c.core_.functName2();' +
            '\n};\n' +

            '\n/**\n * desc3\n * @return {ret.type}\n */\nc.prototype.functName3 = function() {' +
            '\n  return c.core_.functName3();' +
            '\n};\n' +

            '\n/**\n * @param {type.ns} arg1\n */\nc.prototype.functName4 = ' +
              'function(arg1) {' +
            '\n  return c.core_.functName4(arg1);' +
            '\n};\n' +

            '\n/**' +
              '\n * @param {type.ns} arg1' +
              '\n * @param {type.ns2} arg2 desc' +
              '\n * @return {ret.type5}'+
              '\n */\nc.functName5 = ' +
              'function(arg1, arg2) {' +
            '\n  return c.core_.functName5(arg1, arg2);' +
            '\n};' +

            coreprefix + 'c.core_ = require("c");';

  c.addFunct('functName');
  c.addFunct('functName2', 'desc2');
  c.addFunct('functName3', 'desc3', null, 'ret.type');
  c.addFunct('functName4', null, [new ncnode.lib.type('type.ns', 'arg1')]);
  c.addFunct('functName5', null, [
    new ncnode.lib.type('type.ns', 'arg1'),
    new ncnode.lib.type('type.ns2', 'arg2', 'desc')
  ], 'ret.type5', true);

  assertEquals_(exp, c.toString());
};


function testNodeRequire() {
  var c = new ncnode.lib.clazz('c');
  c.nodeRequire = 'alternateInitialisation()';
  var exp = '\ngoog.provide("c");' +
            coreprefix + 'c.core_ = alternateInitialisation();';
  assertEquals_(exp, c.toString());
};

function assertEquals_(exp, actual) {
  // console.error(exp.split('\n'));
  // console.error(actual.split('\n'));
  assertEquals(exp, actual);
};