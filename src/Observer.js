import { def } from './utils'
import defineReactive from './defineReactive'

export default class Observer {
  constructor(value) {
    console.log('我是Observer构造器', value);
    // 给实例（this）加了一个__ob__属性
    def(value, '__ob__', this, false);
    this.walk(value);
  }

  // 遍历
  walk(value) {
    for (const k in value) {
      defineReactive(value, k)
    }
  }
}