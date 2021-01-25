import Dep from './Dep';
import observe from './observe'

export default function defineReactive (data, key, val) {
  const dep = new Dep();

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
      
      // 如果现在处于依赖的收集阶段
      if (Dep.target) {
        const tg = Dep.target;
        console.log('Dep.target 存在，现在是依赖收集阶段。。。', tg)
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
        }
      } else {
        // console.log('Dep.target为空，非依赖收集阶段')
      }

      return val;
    },
    set(newVal) {
      console.log(`捕捉到设置obj的属性${key}的行为`, newVal);
      if (val === newVal) return;
      val = newVal;
      childOb = observe(newVal)
      
      // 通知dep;
      dep.notify();
    }
  })
};