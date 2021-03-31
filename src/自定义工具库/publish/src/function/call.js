export function call (fn, obj, ...args) {
  if (obj === undefined || obj === null) {
    obj = globalThis; // 全局对象
  }
  // 为obj添加临时方法
  obj.__temp__ = fn;
  // 调用 __temp__ 方法
  let result = obj.__temp__(...args);
  // 删除__temp__ 方法
  delete obj.__temp__;
  // 返回执行结果
  return result
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

// console.log(call(add, obj, 1, 2));
// console.log(call(add, null, 3, 4));