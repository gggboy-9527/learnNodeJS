'use strict';
var fs = require('fs');
//1. 异步方法

fs.stat('fileWrite.txt',function(err,stat){
    if(err){
        console.log('file has not exit or other err');
    }else {
        // 是否是文件:
        console.log('isFile: ' + stat.isFile());
        // 是否是目录:
        console.log('isDirectory: ' + stat.isDirectory());
        if (stat.isFile()) {
            // 文件大小:
            console.log('size: ' + stat.size);
            // 创建时间, Date对象:
            console.log('birth time: ' + stat.birthtime);
            // 修改时间, Date对象:
            console.log('modified time: ' + stat.mtime);
        }
    }
});

//2. 同步方法
var statObj = fs.statSync('fileWrite.txt');
console.log(statObj.isFile());