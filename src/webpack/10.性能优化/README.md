# webpack性能优化

* 开发环境性能优化
* 生产环境性能优化

## 开发环境性能优化
* 优化打包速度
  * HMR
* 优化代码调试
  * source-map

## 生产环境性能优化
* 优化打包构建速度
* 优化代码运行的性能
---
### HMR
devServer.hot = true
HMR: hot module replacement 热模块替换 / 热模块更新
作用：当一个模块发生变化，只会重新打包这一个模块（而不是打包所以模块）

 样式文件：  可以使用HMR功能，因为style-loader内部实现了该功能
 js文件：    默认没有HRM功能， --> 需要修改js代码
     注意：HMR功能对js的处理，只能处理非入口的js文件。
 html文件：  默认不能使用HMR功能，同时会导致问题，html文件不更新了（不用做HMR功能）
     解决： 修改entry入口,添加html引入

---

### source-map

 一种提供源代码到构建后代码的映射的技术
 ``` 
 "^(inline-|hidden-|eval-)?(nosources-)?(cheap-(module-)?)?source-map$"
 ```
 
 * inline-source-map:       内联    只生成1个source-map文件
 * hidden-source-map:       外部
 * eval-source-map:         内联    每个文件都生成对应的source-map, 都在eval
 * nosource-source-map:     外部
 * cheap-source-map:        外部
 * cheap-module-source-map: 外部
  
  内联 和 外部 的区别： 1. 外部生成了文件，内联没有， 2. 内联构建速度更快
  
  开发环境：速度快，调式更友好
    速度快（eval > inline > cheap> ...）
      eval-cheap-source-map
      eval-source-map
    调试更友好
      source-map
      cheap-module-source-map
      cheap-source-map
       
      --> eval-source-map | eval-cheap-module-source-map
  
  生产环境：源代码要不要隐藏？调试要不要更友好
    内联会让体积变大，所以在生产环境不用内联
    nosource-source-map   全部影藏
    hidden-source-map    只隐藏源代码，会提示构建后代码错误信息
    
      --> source-map | cheap-module-source-map

---
### oneOf
  以下loader只会匹配一个, 这样文件不会被每个loader过一遍，提升性能
  注意，不能有两个配置处理同一类型文件
```
  oneOf: [
    {},
    {}
  ]
```
---

### 懒加载 和 预加载
```
document.getElementById('btn').onclick= function () {
  // 懒加载~：当文件需要使用是才加载
  import(/* webpackChunkName: 'test' */'./test')
    .tehn((add) => {
      console.log(add(2,3))
    })
}

document.getElementById('btn').onclick= function () {
  // 预加载 prefetch：会在使用之前，提前加载js文件
  import(/* webpackChunkName: 'test', webpackPrefetch: true */'./test')
    .tehn((add) => {
      console.log(add(2,3))
    })
}
```

* 正常加载是并行加载（同一时间加载多个文件），预加载是等其他资源加载完毕，浏览器空闲了再偷偷加载资源

---

### PWA

PWA: 渐进式网络开发应用程序（离线可访问）  
workbox --> workbox-webpack-plugin
```
new WorkboxWebpackPlugin.GenerateSW({
  /**
    * 1. 帮助serviceworder快速启动
    * 2. 删除旧的 serviceworker
    * 
    *  生成一个serviceworker 配置文件~
    */
  clientsClaim: true,
  skipWaiting: true
})
```
---

### 多进程打包 thread-loader
https://www.cnblogs.com/mengfangui/p/13416595.html

> npm install --save-dev thread-loader

把这个 loader 放置在其他 loader 之前， 放置在这个 loader 之后的 loader 就会在一个单独的 worker 池(worker pool)中运行

在 worker 池(worker pool)中运行的 loader 是受到限制的。例如：  
• 这些 loader 不能产生新的文件。  
• 这些 loader 不能使用定制的 loader API（也就是说，通过插件）。  
• 这些 loader 无法获取 webpack 的选项设置。  

每个 worker 都是一个单独的有 600ms 限制的 node.js 进程。同时跨进程的数据交换也会被限制。

请仅在耗时的 loader 上使用

* 可配置选项
```
use: [
  {
    loader: "thread-loader",
    // 有同样配置的 loader 会共享一个 worker 池(worker pool)
    options: {
      // 产生的 worker 的数量，默认是 cpu 的核心数
      workers: 2,

      // 一个 worker 进程中并行执行工作的数量
      // 默认为 20
      workerParallelJobs: 50,

      // 额外的 node.js 参数
      workerNodeArgs: ['--max-old-space-size', '1024'],

      // 闲置时定时删除 worker 进程
      // 默认为 500ms
      // 可以设置为无穷大， 这样在监视模式(--watch)下可以保持 worker 持续存在
      poolTimeout: 2000,

      // 池(pool)分配给 worker 的工作数量
      // 默认为 200
      // 降低这个数值会降低总体的效率，但是会提升工作分布更均一
      poolParallelJobs: 50,

      // 池(pool)的名称
      // 可以修改名称来创建其余选项都一样的池(pool)
      name: "my-pool"
    }
  },
  "expensive-loader"
]
```
---
### externals 
* 排除一些包进行打包，可以使用cdn方式引入  
  
例如：
```
node: 'production',
externals: {
  jquery: 'jQuery'
}
```