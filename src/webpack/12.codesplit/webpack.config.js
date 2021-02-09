
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/**
 * 多入口（一般用于多页面），本实例不再测试
 * entry: {
 *  index: './src/index.js,
 *  mobile: './src/mobile.js,
 * }
 */

module.exports = {
  entry: './src/index.js',
  output: {
    publicPath: './',
    filename: 'js/[name].[contenthash:10].js',
    path: resolve(__dirname, 'build')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({ 
      template: './src/index.html',
      minify: {
        collapseWhitespace: true,
        removeComments: true
      }
     }),
  ],
  /**
   * 1.  可以将node_modules中的代码单独打包一个chunk最终输出
   * 2.  自动分析多入口chunk中，有没有公共的文件。如果有会打包成一个单独的chunk
   */
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  mode: 'production',
  devtool: 'source-map'
}