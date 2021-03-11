const path = require('path')

module.exports = {
  // 入口起点
  entry: './publish/src/index.js',
  output: {
    // 文件输入名
    filename: 'yaoxin-utils.js',
    // 文件输出路径
    // __dirname nodejs的变量，代表当前文件的目录绝对路径
    path: path.resolve(__dirname, 'publish/dist'),
    // 向外暴露的对象的名称  不可含横杠“-”，不然无法引用该名称 ，
    library: 'yxutils',
    // 打包生成库可以通过esm/commonjs/reqirejs的语法引入
    libraryTarget: 'umd'
  },
  // 模式
  // mode: 'development'
  mode: 'production'
}