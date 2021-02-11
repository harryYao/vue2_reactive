### Entry 描述

* dependOn：当前入口文件依赖的入口文件，即必须在入口文件被加载之前加载依赖的入口文件
* filename：指定当前入口文件构建后输出的文件名称
* import：启动构建时被夹加载的模块
* library：配置入口文件的选项
* runtime：运行时 chunk 的名称，如果设置了此选项将会创建一个同名的运行时 chunk，否则将会使用入口文件作为运行时

```
module.exports = {
  entry: {
    index: './index.js',
    main: {
      dependOn: 'index',
      import: './main.js',
    },
  },
};

```