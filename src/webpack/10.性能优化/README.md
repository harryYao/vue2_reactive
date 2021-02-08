# webpack性能优化
* 开发环境性能优化
* 生产环境性能优化

## 开发环境性能优化
* 优化打包速度
* 优化代码调试

## 生产环境性能优化
* 优化打包构建速度
* 优化代码运行的性能

### HMR
 * devServer.hot = true
 * HMR: hot module replacement 热模块替换 / 热模块更新
 * 作用：当一个模块发生变化，只会重新打包这一个模块（而不是打包所以模块）
 * 
 *  样式文件：  可以使用HMR功能，因为style-loader内部实现了该功能
 *  js文件：    默认没有HRM功能， --> 需要修改js代码
 *      注意：HMR功能对js的处理，只能处理非入口的js文件。
 *  html文件：  默认不能使用HMR功能，同时会导致问题，html文件不更新了（不用做HMR功能）
 *      解决： 修改entry入口,添加html引入

### source-map
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
*  



