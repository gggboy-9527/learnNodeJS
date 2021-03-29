'use strict';
process.on('exit', function () {
    console.log('about to exit with code: ');
});// 程序即将退出时执行
process.nextTick(function (){
    console.log('next step');
});// 此方法将在下一轮时间循环中调用
console.log('current step');