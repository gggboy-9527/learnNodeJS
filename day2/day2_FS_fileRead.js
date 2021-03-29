'use strict';
var fs = require('fs');//Node.js内置的fs模块就是文件系统模块，负责读写文件
fs.readFile('fileRead.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
    }
});
// 同步读取
var result = fs.readFileSync('fileRead.txt','utf-8');
console.log(result);