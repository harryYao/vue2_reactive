import { def } from './utils'
import defineReactive from './defineReactive'
import { arrayMethods } from './array'

export default class Observer {
  constructor(value) {
    // console.log('我是Observer构造器', value);
    // 给实例（this）加了一个__ob__属性
    def(value, '__ob__', this, false);

    // 检测是数组还是对象
    if(Array.isArray(value)) {
      // 如果是数组，要将这个数组的原型指向arrayMethods
      Object.setPrototypeOf(value, arrayMethods)
    } else {
      this.walk(value);
    }    
  }

  // 遍历
  walk(value) {
    for (const k in value) {
      defineReactive(value, k)
    }
  }
}