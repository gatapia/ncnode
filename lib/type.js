
goog.provide('ncnode.lib.type');

/**
 * @constructor
 * @param {string} type The namespace
 * @param {string} name The name of this type
 * @param {string} description The description of this type
 */
ncnode.lib.type = function(type, name, desc) {
  if (!type) throw new Error('type is required');

  this.type = type;
  this.name = name;
  this.desc = desc;
};

/**
 * @return {string} A closure annotation param description of this type
 */
ncnode.lib.type.prototype.toParamString = function() {
  var str = '@param {' + this.type + '} ' + this.name;
  if (this.desc) str += ' ' + this.desc;
  return str;
};

/**
 * @return {string} A closure annotation type description of this type
 */
ncnode.lib.type.prototype.toTypeString = function() {
  var str = '@type {' + this.type + '}';
  if (this.desc) str += ' ' + this.desc;
  return str;
};