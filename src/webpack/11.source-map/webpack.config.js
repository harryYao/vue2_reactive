
const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')


/**
* devtool: 'source-map'
* ### source-map
* https://webpack.zcopy.site/configuration/devtool/#devtool
* 一种提供源代码到构建后代码的映射的技术
* "^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$"
* 
*  inline-source-map:       内联    只生成1个source-map文件
*  hidden-source-map:       外部
*  eval-source-map:         内联    每个文件都生成对应的source-map, 都在eval
*  nosource-source-map:     外部
*  cheap-source-map:        外部
*  cheap-module-source-map: 外部
*  
*  内联 和 外部 的区别： 1. 外部生成了文件，内联没有， 2. 内联构建速度更快
*  
*  开发环境：速度快，调式更友好
*    速度快（eval > inline > cheap> ...）
*      eval-cheap-source-map
*      eval-source-map
*    调试更友好
*      source-map
*      cheap-module-source-map
*      cheap-source-map
*       
*      --> eval-source-map | eval-cheap-module-source-map
*  
*  生产环境：源代码要不要隐藏？调试要不要更友好
*    内联会让体积变大，所以在生产环境不用内联
*    nosource-source-map   全部影藏
*    hidden-source-map    只隐藏源代码，会提示构建后代码错误信息
*    
*      --> source-map | cheap-module-source-map
 */

module.exports = {
  entry: ['./src/index.js', './src/index.html'],
  output: {
    publicPath: '/',
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
    open: true,
    // 开启HMR功能
    hot: true,
    // hotOnly: true
  },
  target: 'web',
  devtool: 'source-map'
}