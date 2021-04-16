// 浅拷贝  es6 扩展运算符
export function clone(target) {
  if (typeof target === 'object' && target != null) {
    if (Array.isArray(target)) {
      return [ ...target ];
    } else {
      return { ...target };
    }
  } 
  return target;
}

// 浅拷贝  基于es5
export function clone2(target) {
  if (typeof target === 'object' && target != null) {
    // 创建容器
    const result = Array.isArray(target)? [] : {};
    // 遍历 target 数据
    for (const key in target) {
      if (Object.hasOwnProperty.call(target, key)) {
        result[key] = target[key]        
      }
    }
    return result;
  } 
  return target;
}

/**
 * 乞丐版深拷贝 
 * 问题1: 函数属性会丢失
 * 问题2: 循环引用会出错
 * @param {*} target 
 */
export function deepClone1(target) {
  const str = JSON.stringify(target);
  return JSON.parse(str);
}
const m1 = {
  a: 1, b: ['a'], c: { d: 20 }, 
  // JSON 不能clone方法
  d: () => {
    console.log('function');
  }
}

/**
 * 递归深拷贝
 * 解决的function属性丢失问题，但是循环引用还是没有解决
 * @param {*} target 
 */
 export function deepClone2(target) {
  if (typeof target === 'object' && target != null) {
    // 创建容器
    const result = Array.isArray(target)? [] : {};
    // 遍历 target 数据
    // for (const key in target) {
    //   if (Object.hasOwnProperty.call(target, key)) {
    //     result[key] = deepClone2(target[key]);
    //   }
    // }
    Object.keys(target).forEach(key => {
      result[key] = deepClone2(target[key]);
    })
    return result;
  } 
  return target;
}

/**
 * 递归深拷贝2
 * 解决属性循环引用的问题
 * @param {*} target 
 * @param {*} map 内置一个容器
 */
export function deepClone3(target, map = new Map()) {
  if (typeof target === 'object' && target != null) {
    // 创建容器
    const result = Array.isArray(target)? [] : {};
    map.set(target, result);
    // 遍历 target 数据
    Object.keys(target).forEach(key => {
      if (map.get(target[key])) {
        result[key] = target[key];
      } else {
        result[key] = deepClone3(target[key], map);
      }
    })
    return result;
  } 
  return target;
}

/**
 * 递归深拷贝3, 优化遍历性能
 * @param {*} target 
 * @param {*} map 
 */
export function deepClone4 (target, map = new Map()) {
  if (target!==null && typeof target==='object') {
    // 从缓存容器中读取克隆对象
    let cloneTarget = map.get(target)
    // 如果存在, 返回前面缓存的克隆对象
    if (cloneTarget) {
      return cloneTarget
    }

    if (Array.isArray(target)) {
      cloneTarget = [];
      map.set(target, cloneTarget)
      target.forEach((item, index) => {
        cloneTarget[index] = deepClone4(item, map);
      })
    } else {
      cloneTarget = {};
      map.set(target, cloneTarget);
      Object.keys(target).forEach(key => {
        cloneTarget[key] = deepClone4(target[key], map);
      })
    }
    return cloneTarget
  }
  return target
}





// //需要拷贝的对象
// var obj = {
//   num: 0,
//   str: '',
//   boolean: true,
//   unf: undefined,
//   nul: null,
//   obj: { name: '对象', id: 1, gender: 1  },
//   arr: [0, 1, 2],
//   func: function () { console.log('函数') },
//   date: new Date(0),
//   reg: new RegExp('/正则/ig'),
//   [Symbol('1')]: 1,
// };
// Object.defineProperty(obj, 'innumerable', {
//   enumerable: false, value: '不可枚举属性' }
// );
// obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
// obj.loop = obj    // 设置loop成循环引用的属性
//判断数据类型
function ifType(val){
  let type  = typeof val;
  if (type !== "object") {
    return type;
  }
  return Object.prototype.toString.call(val).replace(/^\[object (\S+)\]$/, '$1');
}
//拷贝代码
const deepClone5 = function (obj, hash = new WeakMap()) {
  if (ifType(obj) === 'Date') 
  return new Date(obj)       // 日期对象直接返回一个新的日期对象
  if (ifType(obj) === 'RegExp')
  return new RegExp(obj)     //正则对象直接返回一个新的正则对象
  //如果循环引用了就用 weakMap 来解决
  if (hash.has(obj)) return hash.get(obj)
  let allDesc = Object.getOwnPropertyDescriptors(obj)
  //遍历传入参数所有键的特性
  let copyObj = Object.create(Object.getPrototypeOf(obj), allDesc)
  //继承原型链
  hash.set(obj, copyObj)
  const isType = obj => (typeof obj === 'object' || typeof obj === 'function') && (obj !== null)
  for (let key of Reflect.ownKeys(obj)) { 
    copyObj[key] = (isType(obj[key]) && typeof obj[key] !== 'function') ? deepClone5(obj[key], hash) : obj[key]
  }
  return copyObj
}
// //验证
// let copyObj = deepClone5(obj)
// copyObj.arr.push(4)
// console.log('原始对象obj', obj)
// console.log('拷贝后的对象copyeObj', copyObj)

// 作者：cn_gxf
// 链接：https://juejin.cn/post/6938341501831217189
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。