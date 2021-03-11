## 2.发布到npm中央仓库

#### 2.1.完善 package.json
注意:
name: 必须是唯一的名称(在npm在线中央仓库中没有同名的)
main: 必须指定为打包生成的js文件
keywords: 指定一些方便别的程序员搜索到当前库的关键字


#### 2.2.npm配置
npm配置的中央仓库不能是淘宝镜像
发布前必须执行: npm config set registry https://registry.npmjs.org/
不用发布时: npm config set registry http://registry.npm.taobao.org/
查看配置: npm config list

#### 2.3.注册npm中央仓库账号
注册地址: https://www.npmjs.com/
关键信息: 用户名/密码/邮箱(需要验证)
#### 2.4.添加用户
执行: npm addUser
> 在家中无法登录
> npm ERR! network This is a problem related to network connectivity.
> npm ERR! network In most cases you are behind a proxy or have bad network settings.
> npm ERR! network
> npm ERR! network If you are behind a proxy, please make sure that the
> npm ERR! network 'proxy' config is set properly.  See: 'npm help config'
登陆npm仓库
依次指定用户名/密码/邮箱

#### 2.5.发布仓库
执行: npm publish

#### 2.6.更新代码后再发布
修改项目库的版本号: package.json 中的version 从1.0.0 改为1.0.1, 注意一定要变大
修改代码后重新打包: npm run build
执行发布: npm publish


#### 2.7.强制删除已发布的库
执行: npm unpublish --force
注意: 必须在72小时内, 否则不能再删除


> 发布成功 https://www.npmjs.com/package/yaoxin-utils

> 1. 发布会将package.json所在的目录全部发布到 npm
> 2. library 名称不要带 “-”