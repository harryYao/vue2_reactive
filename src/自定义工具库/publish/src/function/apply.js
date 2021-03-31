export function apply(fn, obj, args) {
  if (obj === undefined || obj === null) {
    obj = globalThis; // 全局对象
  }
  // 为obj添加临时方法
  obj.__temp__ = fn;
  // 执行方法
  let result = obj.__temp__(...args);
  // 删除临时方法
  delete obj.__temp__;

  return result;
}

/* ---------测试--------- */


// function add(a, b) {
//   console.log(this);
//   return a + b + this.c;
// }
// let obj = {
//   c: 'objccc'
// };
// window.c = 'windowccc';

// console.log(apply(add, obj, [1, 2]));
// console.log(apply(add, null, [3, 4]));