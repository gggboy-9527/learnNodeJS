'use strict';
var fs = require('fs');
var datas = "file write，second";
// 读取fileRead.txt，再将数据写入fileWrite.txt中(异步写)
fs.writeFile('fileWrite.txt',datas,function(err){
    if(err){
        console.log(err);
    }else{
        console.log('ok,finish');
    }
});
//同步写
var data = 'Hello, Node.js';
fs.writeFileSync('output.txt', data);