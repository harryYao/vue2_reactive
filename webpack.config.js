// const path = require('path');

module.exports = {
  entry: {
    first: './src/响应式源码学习/index.js',
    second: './src/虚拟Dom和diff算法学习/index.js',
    third: './src/AST抽象语法树/index.js',
    four: './src/Vue之指令和生命周期/index.js',
  },
  output: {
    publicPath: 'xuni',
    filename: '[name].js',
  },
  module: {
  },
  devServer: {
    port: 8090,
    contentBase: 'www',
  },
};
