// push, pop, shift, unshift, splice, sort, reverse
// vue对以上7个方法进行了改写
import { def } from './utils'

// 得到Array.prototype
const arrayPrototype = Array.prototype;

// 以Array.prototype为原型，创建arrayMethods对象，并暴露出去
export const arrayMethods = Object.create(arrayPrototype);

//需要改写的方法列表
const methodsNeedChange = [
  'push', 
  'pop', 
  'shift', 
  'unshift',
  'splice', 
  'sort', 
  'reverse'
];

methodsNeedChange.forEach(methodName => {
  // 备份原来的方法
  const original = arrayPrototype[methodName];

  // 定义新的方法
  def(arrayMethods, methodName, function() {

    // 恢复原来的功能
    const result = original.apply(this, arguments)

    // 把类数组对象变成数组
    const args = [...arguments];

    // 把这个数组的__ob__取出来，__ob__已经被添加了
    const ob = this.__ob__;

    // 有三种方法push\unshift\splice能够插入新项，现在要把插入的新项也要变为observe的
    let inserted = [];

    switch (methodName) {
      case 'push':
      case 'unshift': 
        inserted = args;
        break;
      case 'splice':
        // splice格式（下标，数量，插入的新项）
        inserted = args.slice(2)
      default:
        break;
    }

    // 让新项也变成响应的
    if(inserted) {
      ob.observeArray(inserted)
    }

    //监控到数组的方法
    console.log('监控到数组的方法', methodName, ...args);
    ob.dep.notify();

    return result;
  }, false)

})
