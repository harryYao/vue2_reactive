function call (fn, obj, ...args) {
  if (obj === undefined || obj === null) {
    obj = globalThis;
  }
  obj.__temp__ = fn;
  let result = obj.__temp__(...args);
  delete obj.__temp__;
  return result
}

export function bind (fn, obj, ...args) {
  // 返回一个新函数，调用fn，并改变this指向
  return function(...args2) {
    // 执行 call 函数
    return call(fn, obj, ...args, ...args2)
  }
}

/* ---------测试--------- */

function add(a, b) {
  // console.log(this);
  console.log(arguments);
  return a + b + this.c;
}
let obj = {
  c: 'objccc'
};
window.c = 'windowccc';

let fn = bind(add, obj, 1, 2)
console.log(fn());

let fn2 = bind(add, obj)
console.log(fn2(3, 4));

let fn3 = add.bind(obj, 1, 2)
console.log(fn3(3, 4));
// Arguments(4) [1, 2, 3, 4, callee: ƒ, Symbol(Symbol.iterator): ƒ]
// 参数都会传入，接受顺序先bind时的参数，再调用时候的参数
// 所以我们自定义的bind函数 args2在args后面

let fn4 = bind(add, obj, 1,2)
console.log(fn4(3, 4));