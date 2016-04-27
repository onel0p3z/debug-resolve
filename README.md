# debug-resolve
A module to create a string to use with debug from the file's path

#Usage
```js
var debug = require('debug')(require('debug-resolve')(__filename, process.cwd()));
```
or
```js
var resolver = require('debug-resolve')(__filename, process.cwd());
var debug = require('debug')(resolver);
```
