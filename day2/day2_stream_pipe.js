'use strict';
var fs = require('fs');
var rs = fs.createReadStream('writeStream1.txt');
var ws = fs.createWriteStream('writeStream2.txt');
rs.pipe(ws);