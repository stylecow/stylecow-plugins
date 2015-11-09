# Stylecow plugins

[![Build Status](https://travis-ci.org/stylecow/stylecow-plugins.svg)](https://travis-ci.org/stylecow/stylecow-plugins)

All stylecow plugins ready to use. [More info](http://stylecow.github.io/plugins)

## Simple usage:

```js
var stylecow = require('stylecow-core');
var plugins  = require('stylecow-plugins');

//get all available plugins:
console.log(plugins.getAll());

//Use all available plugins:
var tasks = (new stylecow.Tasks()).use(plugins());

//Use only some plugins:
var tasks = (new stylecow.Tasks()).use(plugins(['prefixes', 'import', 'nested-rules']));
```