import * as b from './js/b'

console.log(b.a.name)

// 打包结果：
// !function(){"use strict";console.log("harry yao")}();
// tree-shaking 更加彻底