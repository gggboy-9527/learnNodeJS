'use strict';
var crypto = require('crypto');
var hash = crypto.createHash('sha256');
hash.update('hello');
hash.update('nodejs');
console.log(hash.digest('hex'));