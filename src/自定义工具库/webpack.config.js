const path = require('path')

module.exports = {
  // 入口起点
  entry: './src/index.js',
  output: {
    // 文件输入名
    filename: 'yaoxin-utils.js',
    // 文件输出路径
    // __dirname nodejs的变量，代表当前文件的目录绝对路径
    path: path.resolve(__dirname, 'dist'),
    library: 'yaoxin-utils',
    libraryTarget: 'umd'
  },
  // 模式
  // mode: 'development'
  mode: 'production'
}