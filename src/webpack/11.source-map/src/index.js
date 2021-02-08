import './style/iconfont.css'
import './main.css'
import './index.less'

import print from './print'


function add(a,b) {
  return a+ b;
}

console.log(add(10,20));
console.log(add(10,10));
print('bbbbbb');
console.log(add(10,10));
console.log(add(10,10));

if(module.hot) {
  // 一旦开启了module.hot（HMR）功能。 --> 让HMR功能生效
  module.hot.accept('./print.js', () => {
    // 会监听pring.js 文件变化，一旦发生变化，其他模块不会重新打包构建。
    // 会执行后面的回调函数
    print()
  })
}