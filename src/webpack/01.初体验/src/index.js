/*
  index.js: webpack 入口起点文件

  1. 运行指令：
    开发环境： webpack ./src/index.js -o ./build/built.js --mode=development
    webpack 会以 ./src/index.js 为入口文件开始打包，打包后输出到 ./build/built.js
    整体打包环境为开发环境
    生成环境： webpack ./src/index.js -o ./build/built.js --mode=production

  2. 结论
    1. webpack只能处理js/json资源，不能处理css/img等其他资源
    2. 将ES6的模块化代码编译成浏览器可识别的模块化代码
    3. 生成环境比开发环境多一个压缩js代码
 */

import data from './data.json'

console.log(data)

function add(a,b) {
  return a+ b;
}

console.log(add(10,20));