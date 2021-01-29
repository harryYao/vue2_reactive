/**
 * 观察函数， 给对象创建Observer实例，并赋值给__ob__ 属性, 同时返回这个属性
 * @param {*} value 
 */
function observe (value) {
  // 如果不是对象，什么也不做
  if (typeof value != 'object') return;
  /**
   * 实例的__ob__属性，Observer对象的实例
   */
  var ob;
  if (typeof value.__ob__ !== 'undefined') {
    ob = value.__ob__;
  } else  {
    ob = new Observer(value)
  }
  return ob;
}

/**
 * 观察者类
 */
class Observer {
  constructor(value) {
    // 正常需要检测是数组还是对象 这个精简版本不做数组处理
    console.log('====>', 'Observer 构造函数', value);
    this.walk(value);
  }

  /** 遍历 */
  walk(value) {
    for (const k in value) {
      defineReactive(value, k)
    }
  }
}

function defineReactive (data, key, val) {
  console.log('====>', 'defineReactive函数', data, key);
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
      console.log('====>', `捕捉到访问${data}的属性${key}的行为`);
      return val;
    },
    set(newVal) {
      console.log('====>', `捕捉到设置${data}的属性${key}的行为`);
      val = newVal;
      // 新值也可能是一个对象，对象需要observe
      childOb = observe(newVal)
    }
  })
};