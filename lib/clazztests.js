
goog.require('ncnode.lib.clazz');
goog.require('ncnode.lib.type');

goog.require('goog.testing.jsunit');
goog.require('goog.array');

function testBuildJSDoc_() {
  assertEquals('/**\n * test\n */', ncnode.lib.clazz.buildJSDoc_(['test']));
};

function testEmptyClass() {
  var c = new ncnode.lib.clazz('ncnode.test.className');
  var exp = '\ngoog.provide("ncnode.test.className");\n';

  assertEquals(exp, c.toString());
};

function testEmptyClassWithOverview() {
  var c = new ncnode.lib.clazz('ncnode.test.className', 'foo');
  var exp = '\ngoog.provide("ncnode.test.className");\n\n/**\n * @fileoverview foo\n */';

  assertEquals(exp, c.toString());
};

function testConstructorWithNoDescAndNoArgs() {
  var c = new ncnode.lib.clazz('ncnode.test.className');
  c.createConstructor();
  assertEquals('/**\n * @constructor\n */', c.constructor_);
};

function testConstructorWithNoDesc() {
  var c = new ncnode.lib.clazz('ncnode.test.className');
  c.createConstructor('desc');
  assertEquals('/**\n * @constructor\n * desc\n */', c.constructor_);
};

function testConstructorWithArgs() {
  var c = new ncnode.lib.clazz('ncnode.test.className');
  c.createConstructor(null, [
    new ncnode.lib.type('type.ns', 'arg1'),
    new ncnode.lib.type('type.ns2', 'arg2', 'desc')
  ]);
  assertEquals('/**\n * @constructor\n * @param {type.ns} arg1' +
               '\n * @param {type.ns2} arg2 desc\n */', c.constructor_);
};

function testConstructorWithDescAndArgs() {
  var c = new ncnode.lib.clazz('ncnode.test.className');
  c.createConstructor('desc', [
    new ncnode.lib.type('type.ns', 'arg1')
  ]);
  assertEquals('/**\n * @constructor\n * desc\n * @param {type.ns} arg1\n */',
               c.constructor_);
};

function testAddAttribute() {
  var c = new ncnode.lib.clazz('c');
  var exp = '\ngoog.provide("c");\n' +
            '\n/**\n * @type {type.ns}\n */\nc.prototype.attr1;';
  c.addAttr('type.ns', 'attr1');
  assertEquals(exp, c.toString());
};

function testAddMultipleAttribute() {
  var c = new ncnode.lib.clazz('c');
  var exp = '\ngoog.provide("c");\n' +
            '\n/**\n * @type {type.ns}\n */\nc.prototype.attr1;' +
            '\n/**\n * desc\n * @type {type.ns2}\n */\nc.prototype.attr2;' +
            '\n/**\n * desc3\n * @type {type.ns3}\n */\nc.attr3;';
  c.addAttr('type.ns', 'attr1');
  c.addAttr('type.ns2', 'attr2', 'desc');
  c.addAttr('type.ns3', 'attr3', 'desc3', true);
  assertEquals(exp, c.toString());
};

function testAddFunct() {
  var c = new ncnode.lib.clazz('c');
  var exp = '\ngoog.provide("c");\n' +
            '\n/**\n * @type {type.ns}\n */\nc.prototype.attr1;';
  // name, desc, args, returnType, isStatic
  c.addFunct('type.ns', 'attr1');
  assertEquals(exp, c.toString());
};