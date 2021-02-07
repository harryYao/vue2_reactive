const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const OptimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')

// process.env.NODE_ENV === 'development'

module.exports = {
  // 入口起点
  entry: './src/index.js',
  output: {
    filename: 'built.js',
    path: resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          // 'style-loader',
          // style-loader 不需要，使用MiniCssExtractPlugin中的loader取代
          MiniCssExtractPlugin.loader,
          // 将css文件变成commonjs模块加载到js中，里面内容是样式字符串
          'css-loader',
          /**
            css兼容性处理：postcss --> postcss-loader postcss-preset-env

            "browserslist": {
              // 开发环境 --> 设置环境变量： process.env.NODE_ENV = development
              "development": [
                "last 1 chrome version",
                "last 1 firefox version",
                "last 1 safari version"
              ],
              "production": [
                ">0.2%",
                "not dead",
                "not op_mini all"
              ]
            }
           */
          // 使用loader的默认配置
          // 'posetcss-loader'
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                ident: 'postcss',
                plugins: [
                  // require('postcss-preset-env')()
                  "postcss-preset-env",
                ]
              }
            }
          }
        ]
      }
    ]
  },
  plugins: [  
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin({
      // 对输出的文件重命名
      filename: 'css/built.css'
    }),
    // 压缩css插件
    new OptimizeCssAssetsWebpackPlugin()
  ],
  // 模式
  mode: 'development'
}