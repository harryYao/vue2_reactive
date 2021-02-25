
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
      // 以下都是默认值
      /*
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
          priority: -20,  // 优先级
          // 如果当前要打包的模块，和之前已经被提取的模块是同一个，就会复用，而不是重新打包
          reuseExistingChunk: true, 
        },
      },*/
    },
    // 将当前模块的记录其他模块的hash单独打包为一个文件 runtime
    // 解决： 修改a.js文件导致b文件的contenthash变化
    runtimeChunk: {
      name: entrypoint => `runtime-${entrypoint.name}`
    },
    minimizer: {
      // 配置生产环境的压缩方案： js 和css ,需安装 terser-webpack-plugin
      // https://webpack.docschina.org/plugins/terser-webpack-plugin/
      // 如果你使用的是 webpack v5 或以上版本，你不需要安装这个插件。webpack v5 自带最新的 terser-webpack-plugin。如果使用 webpack v4，则必须安装 terser-webpack-plugin v4 的版本。
      // new TerserWebpackPlugin({
      //   cache: true, // 开启缓存
      //   parallel: true, // 开启多进程打包
      //   sourceMap: true // 启动source-map
      // })
    }
  },
  mode: 'production',
  devtool: 'source-map'
}