'use strict';
var http = require('http');
var server = http.createServer(function(request,response){
    // 回调函数接收request和response对象,
    // 获得HTTP请求的method和url:
    console.log(request.method + ':' + request.url);
    // 将HTTP响应200写入response, 同时设置Content-Type: text/html:
    response.writeHead(200,{'Content-type':'text/html'});
    // 将HTTP响应的HTML内容写入response:
    response.end('<h1>hello world</h1>');
});
// 让服务器监听8080端口:
server.listen(8080);
