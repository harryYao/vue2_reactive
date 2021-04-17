/**
 * 自定义的new, 创建Fn构造函数的实例对象
 * @param {*} Fn 
 * @param  {...any} args 
 */
export function newInstance(Fn, ...args) {
  // 1. 创建一个新的对象
  const obj = {};
  // 2. 修改函数内部 this 指向新对象并执行
  const result = Fn.call(obj, ...args);
  // 3. 修改新对象的原型对象
  obj.__proto__ = Fn.prototype;
  // 4. 返回一个对象,如果构造函数本身返回的是一个对象,那么就返回这个对象,如果不是就返回这个实例对象
  return result instanceof Object ? result: obj;
}



// 自定义检测类型
export function myInstance(obj, Fn) {
  // 获取函数的显式原型
  let prototype = Fn.prototype;
  // 获取obj的隐式原型对象
  let proto = obj.__proto__;
  // 遍历原型链
  while (proto) {
    // console.log('proto', proto);
    // 检测原型对象是否相等
    if (prototype === proto) {
      return true;
    }
    // 如果不等于
    proto = proto.__proto__;
  }
  return false;
}



// 合并对象  属性替换
export function mergeObject(obj1, obj2) {
  return {...obj1, ...obj2}
}
const obj1 = {
  a: [{x: 1}, {y : 2}],
  b: 1
}
const obj2 = {
  a: { r: 3 },
  b: [2, 5],
  c: 'ddaa'
}

// console.log(mergeObject(obj1, obj2));

// 合并对象  属性也合并
export function mergeObjs(...objs) {
  const result = {};
  objs.forEach(item => {
    Object.keys(item).forEach(key => {
      if (result.hasOwnProperty(key)) {
        result[key] = [].concat(result[key], item[key])
      } else {
        result[key] = item[key]
      }
    })
  })
  return result;
}