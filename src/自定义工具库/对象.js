/**
 * 自定义的new, 创建Fn构造函数的实例对象
 * @param {*} Fn 
 * @param  {...any} args 
 */
function newInstance(Fn, ...args) {
  // 1. 创建一个新的对象
  const obj = {};
  // 2. 修改函数内部 this 指向新对象并执行
  const result = Fn.call(obj, ...args);
  // 3. 修改新对象的原型对象
  obj.__proto__ = Fn.prototype;
  // 4. 返回一个对象,如果构造函数本身返回的是一个对象,那么就返回这个对象,如果不是就返回这个实例对象
  return result instanceof Object ? result: obj;
}

function Person(name, age) {
  this.name = name;
  this.age = age;
}

let obj = newInstance(Person, '张三', 20);

console.log(obj);