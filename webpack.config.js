const path = require('path')

module.exports = {
    entry: {
        first: './src/响应式源码学习/index.js',
        second: './src/虚拟Dom和diff算法学习/index.js'
    },
    output: {
        publicPath: 'xuni',
        filename: '[name].js'
    },
    devServer: {
        port: 8090,
        contentBase: 'www'
    }
}