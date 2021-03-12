// ## 原型&原型链


function Fn(){
  var a = 12
  this.getName = function(){
      console.log('private getName')
  }
}

Fn.prototype.getName = function (){
    console.log('public getName')
}

var fn = new Fn()
var fn1 = new Fn()
// 1，2
console.log(fn.a)
console.log(fn.getName())
// 3，4，5
console.log(fn.getName === fn1.getName)
console.log(fn.__proto__.getName === fn1.__proto__.getName)
console.log(fn.__proto__.getName === Fn.prototype.getName)
//6，7
console.log(fn.hasOwnProperty ===Object.prototype.hasOwnProperty)
console.log(fn.constructor === Fn)
/* 输出
*   undefined
*   private getName
*   false
*   true
*   true
*   true
*   true
*/

// 作者：LinYIYI
// 链接：https://juejin.cn/post/6938590449674223624
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。