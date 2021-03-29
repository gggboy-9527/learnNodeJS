'use strict';
// 引入hello模块
var greet = require('./day1_helloNode.js');
console.log(greet);
var funG = greet.GET_wx;
funG('s');