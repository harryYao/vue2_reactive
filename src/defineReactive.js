import observe from './observe'

export default function defineReactive (data, key, val) {
  if (arguments.length == 2) {
    val = data[key]
  }

  // 子元素要进行observe, 至此形成递归（多个函数类间循环调用）
  let childOb = observe(val);

  Object.defineProperty(data, key, {
    // 可枚举
    enumerable: true,
    // 可以被配置，可以delete
    configurable: true,
    // getter
    get() {
      console.log(`捕捉到访问obj的属性${key}的行为`);
      return val;
    },
    set(newVal) {
      console.log(`捕捉到设置obj的属性${key}的行为`, newVal);
      if (val === newVal) return;
      val = newVal;
      childOb = observe(newVal)
    }
  })
};