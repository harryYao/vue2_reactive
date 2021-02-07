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
      {
        // 处理less文件需要  less 和 less-loader
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        // 处理图片资源, 使用url-loader, 需要使用两个包（url-loader, file-loader）
        // 但是默认处理不了html内的img标签图片
        test: /\.(jpg|png|gif|jepg)$/,
        // 使用一个loader的时候 使用loader
        loader: 'url-loader',
        options: {
          // 配置limit , 图片小于8kb时使用base64处理
          limit: 8 * 1024,
          // 目前版本没有该bug，视频中 版本存在 img标签解析后出现src = [object Module]这样的bug
          // 是由于url-loader是es6模块化解析，而html-loader引入图片时commonjs
          // esModule: false,
          // 哈希名称太长可以截短
          name: '[hash:10].[ext]'
        }
      },
      {
        test: /\.html$/,
        // 处理html文件的img图片（负责引入图片，从而能被url-loader进行处理）
        loader: 'html-loader'
      }
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