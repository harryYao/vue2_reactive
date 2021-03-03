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

