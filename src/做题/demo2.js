// 有以下数据结构
const data = [
  {
    key: 'name',
    value: 'lufei'
  },
  {
    key: 'age',
    value: 17
  },
  {
    key: 'from',
    value: 'donghai'
  }
]

// 实现一个转换函数 processFn
// 根据对应的key,value 生成对象
// 要求尽可能多的用一些es6的新特性，尽可能少的去声明变量

const processFn = data => {
}

processFn(data)

// {
//   name: 'lufei',
//   age: 17,
//   from: 'donghai'
// }

// 箭头函数
const fn1 = (data) => {
  const rst = {};
  for (let i = 0; i < data.length; i++) {
    rst[data[i].key] = data[i].value
  }
  return rst;
} 
// 箭头函数，解构赋值，for...of 迭代器
const fn2 = (data) => {
  const rst = {};
  for (const {key, value} of object) {
    rst[key] = value;
  }
  return rst;
} 
// 箭头函数，解构赋值，for...of 迭代器, es6 加上[], [key]字面量表示属性, Object.assign
const fn3 = (data) => {
  const rst = {};
  for (const {key, value} of object) {
    Object.assign(rst, {[key]: value});
  }
  return rst;
} 
// 箭头函数，解构赋值，for...of 迭代器, es6 加上[], [key]字面量表示属性, 扩展运算符
const fn4 = (data) => {
  const rst = {};
  for (const {key, value} of object) {
    rst = { ...rst, [key]: value };
  }
  return rst;
} 
// 箭头函数，解构赋值, Array.reduce, 扩展运算符
const fn5 = (data) => {
  data.reduce((rst, {key, value} ) => {
    return {...rst,  [key]: value}
  }, {})
} 

const rst = data.reduce((obj, {key, value}) => ({...obj,  [key]: value}), {});

const rst2 = Object.fromEntries(data.map(Object.values))

// https://ramda.cn/  一款实用的 JavaScript 函数式编程库。
// import * as R from 'ramda'
// const f9 = R.reduce(
//   R.useWith(R.merge, [
//     R.identify,
//     R.converge(R.objOf, [
//       R.prop('key'),
//       R.prop('value')
//     ])
//   ]), {})