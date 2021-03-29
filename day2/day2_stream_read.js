'use strict';
var fs = require('fs');
// 1 打开一个流
var rs = fs.createReadStream('fileRead.txt','utf-8');
// 2 响应data事件表示流的数据已经可以读取了
rs.on('data',function(chunk){
    console.log(chunk);
});
// 3 end表示这个流已经到结尾了，没有内容可读了
rs.on('end',function(){
    console.log('end');
});
// 4 error表示事件出错
rs.on('error',function(err){
    console.log('error:'+err);
});