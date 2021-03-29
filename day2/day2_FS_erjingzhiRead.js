'use strict';
var fs = require('fs');
// 读取二进制文件，以一张图片为例(异步读取)
fs.readFile('ic_bumen.png',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data);
        console.log(data.length + ' bytes');
    }
});
