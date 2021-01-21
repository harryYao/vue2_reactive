// push, pop, shift, unshift, splice, sort, reverse
// vue对以上7个方法进行了改写
import { def } from './utils'

// 得到Array.prototype
const arrayPrototype = Array.prototype;

// 以Array.prototype为原型，创建arrayMethods对象，并暴露出去
export const arrayMethods = Object.create(arrayPrototype);

//需要改写的方法列表
const methodsNeedChange = [
  'push', 'pop', 'shift', 'unshift', 'splice', 'sort', 'reverse'
];

methodsNeedChange.forEach(methodName => {
  // 备份原来的方法
  const original = arrayPrototype[methodName];
  // 定义新的方法
  def(arrayMethods, methodName, function() {
    //监控到数组的方法
    console.log('aaa');
    // 恢复原来的功能
    original.apply(this, arguments)
  }, false)

})
