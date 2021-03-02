// 浅拷贝
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

const obj = { x: 'abc', y: {m : 1}};
const result = clone1(obj);
result.y.m = 2;
console.log(result);
console.log(obj); //obj.y.m = 2， 浅拷贝时，原对象的引用属性值也被改变