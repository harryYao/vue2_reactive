
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
      chunks: 'all',
      minSize: 30 * 1024,// 分割的chunk 最小为30kb
      maxSize: 0,// 最大没有限制
      // minChunks: 1,// 要提取的chunk最少被引用1次
      // maxAsyncRequests: 5, // 按需加载时并行加载的文件最大数量
      // maxInitialRequests: 3, // 入口js文件最大并行请求数量
      automaticNameDelimiter: `~`, //连接符名称
      name: true, // 可以使用命名规则
      cacheGroups: { // 分割chunk的组
        // node_modules文件会被打包到 vender组的chunk中。 --> vendors~xxx.js
        defaultVendors: {
          test: /[\\/]node_modules[\\/]/,
          priority: -10, // 优先级
          reuseExistingChunk: true,
        },
        default: {
          // 要提取的chunk最少被引用2次
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      },
    }
  },
  mode: 'production',
  devtool: 'source-map'
}