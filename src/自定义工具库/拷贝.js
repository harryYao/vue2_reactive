// 浅拷贝  es6 扩展运算符
function clone1(target) {
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
function clone2(target) {
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

const obj = { x: 'abc', y: {m : 1}};
const result = clone1(obj);
result.y.m = 2;
console.log(result);
console.log(obj); //obj.y.m = 2， 浅拷贝时，原对象的引用属性值也被改变


/**
 * 乞丐版深拷贝 
 * 问题1: 函数属性会丢失
 * 问题2: 循环引用会出错
 * @param {*} target 
 */
function deepClone1(target) {
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
// 循环引用会出错
// m1.b.push(m1.c);
// m1.c.f = m1.b;
// Uncaught TypeError: Converting circular structure to JSON

const m2 = deepClone1(m1); 

/**
 * 递归深拷贝
 * 解决的function属性丢失问题，但是循环引用还是没有解决
 * @param {*} target 
 */
function deepClone2(target) {
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
const m3 = deepClone2(m1); 

// function deepClone3(target) {
//   if (typeof target === 'object' && target != null) {
//     // 创建容器
//     const result = Array.isArray(target)? [] : {};
//     // 遍历 target 数据
//     Object.keys(target).forEach(key => {
//       result[key] = deepClone2(target[key]);
//     })
//     return result;
//   } 
//   return target;
// }