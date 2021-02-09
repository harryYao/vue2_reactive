
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


/**
 * devServer.hot = true
 * HMR: hot module replacement 热模块替换 / 热模块更新
 * 作用：当一个模块发生变化，只会重新打包这一个模块（而不是打包所以模块）
 * 
 *  样式文件：  可以使用HMR功能，因为style-loader内部实现了该功能
 *  js文件：    默认没有HRM功能， --> 需要修改js代码
 *      注意：HMR功能对js的处理，只能处理非入口的js文件。
 *  html文件：  默认不能使用HMR功能，同时会导致问题，html文件不更新了（不用做HMR功能）
 *      解决： 修改entry入口,添加html引入，
 * 
 */

module.exports = {
  entry: ['./src/index.js', './src/index.html'],
  output: {
    publicPath: './',
    filename: 'js/built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      { test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader'] },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.(jpg|png|gif|jepg)$/,
        loader: 'url-loader',
        options: {
          limit: 8 * 1024,
          name: '[hash:10].[ext]',
          outputPath: 'imgs'
        }
      },
      { test: /\.html$/, loader: 'html-loader' },
      {
        exclude: /\.(css|less|js|html|png|jpe?g|gif)$/,
        loader: 'file-loader', 
        options: {
          name: '[hash:10].[ext]',
          outputPath: 'media'
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({ template: './src/index.html' }),
    // new webpack.HotModuleReplacementPlugin()
  ],
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
    // open: true,
    // 开启HMR功能
    hot: true,
    // hotOnly: true
  },
  target: 'web',
  devtool: 'source-map'
}