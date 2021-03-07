const { resolve } = require('path')

module.exports = {
  // 入口起点
  entry: './index.js',
  output: {
    // 文件输入名
    filename: 'built.js',
    // 文件输出路径
    // __dirname nodejs的变量，代表当前文件的目录绝对路径
    path: resolve(__dirname, 'dist'),
    // 所有资源引入的公共路径前缀  --> 'imgs/a.jpg'  -->  '/imgs/a.jpg'
    publicPath: '/',
  },
  // 模式
  mode: 'development'
}