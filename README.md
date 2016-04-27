# debug-resolve
A module to create a string to use with debug from the file's path

[![npm package](https://nodei.co/npm/debug-resolve.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/debug-resolve/)

#Usage
```js
var debug = require('debug')(require('debug-resolve')(__filename, process.cwd()));
```
or
```js
var resolver = require('debug-resolve')(__filename, process.cwd());
var debug = require('debug')(resolver);
```
