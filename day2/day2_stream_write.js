'use strict';
var fs = require('fs');
// 写入字符
// var ws = fs.createWriteStream('writeStream1.txt','utf-8');
// ws.write('hello');
// ws.write('stream');
// ws.write('write');
// ws.end();

// 写入二进制数据

var ws1 = fs.createWriteStream('writeStream2.txt');
ws1.write(Buffer.from('使用stream写入二进制数据','utf-8'));
ws1.write(Buffer.from('end','utf-8'));
ws1.end();