/**
 * loader  1. 下载  2. 使用
 * plugin  1. 下载  2. 引入  3. 使用
 */
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { Template } = require('webpack')

module.exports = {
  // 入口起点
  entry: './src/index.js',
  output: {
    // 文件输入名
    filename: 'built.js',
    // 文件输出路径
    // __dirname nodejs的变量，代表当前文件的目录绝对路径
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      // 详细的loader配置
    ]
  },
  plugins: [
    // 详细的插件配置
    // html-webpack-plugin 默认创建一个空的html, 自动引入打包输出的所有资源（js/css）
    new HtmlWebpackPlugin({
      // 复制模板文件，并自动引入打包输出的所有资源
      template: './src/index.html'
    })
  ],
  // 模式
  mode: 'development'
}