## 开发小技巧


#### 多行编辑
* ctrl + d, 选中多个相同单位，直接多行编辑
* ctrl + shift + alt + 方向键上下，多个光标，多行编辑
#### Increment Selection 插件
* 选中多行后，插入自增的id 1,2,3,4,5……

----


## npm 修改缓存路径，减少c盘压力

* 设置 npm 全局包下载路径
```
npm config set prefix "D:\system\nodejs\node_global"
```
* 设置 npm 缓存路径
````
npm config set cache "D:\system\nodejs\node_cache"
```