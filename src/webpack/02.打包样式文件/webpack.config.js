const { resolve } = require('path')

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
        // 匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader进行处理
        use: [
          // use数组中的loader执行顺序为： 从右到左，从下到上，依次生效
          // 创建style标签，将js中的样式资源插入进行，添加到head中生效
          'style-loader',
          // 将css文件变成commonjs模块加载到js中，里面内容是样式字符串
          'css-loader'
        ]
      }
    ]
  },
  plugins: [
    // 详细的插件配置
  ],
  // 模式
  mode: 'development'
}