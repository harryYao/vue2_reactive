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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      // 打包其他资源(除了html/js/css等之外的资源)
      {
        exclude: /\.(css|less|js|html)$/,
        loader: 'file-loader', 
        options: {
          name: '[hash:10].[ext]'
        }
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
  mode: 'development',
  
  // 开发服务器 devServer, 只在内存中编译打包，不会打包
  // 启动devServer指令为  npx webpack-dev-server (没全局安装，所以使用 npx )
  devServer: {
    // 项目构建后的路径
    contentBase: resolve(__dirname, 'build'),
    // 启动gzip压缩
    compress: true,
    // 端口
    port: 8801,
    // 自动打开浏览器
    // open: true
  }
}