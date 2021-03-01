const { template } = require("babel-core");

function map(arr, callback){
  let result = [];
  for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i))
  }
  return result;
}

// 测试
const arr = [1,2,3,4];
const result = map(arr, (item) => {
  return item * 10;
})

console.log(result);


function reduce(arr, callback, initVal) {
  let result = initVal;
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i])
  }
  return result;
}

const result1 = reduce(arr, function(res, value) {
  return res + value
}, 0)


function filter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i)
    res && result.push(arr[i])
  }
  return result;
}
const result2 = filter(arr, item => item % 2 === 0);


function find(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i)
    if (res) {
      return arr[i]
    }
  }
  return undefined;
}

const result3 = find(arr, item => item > 2);


function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i)
    if (res) {
      return i
    }
  }
  return -1;
}

const result4 = findIndex(arr, item => item > 2);


function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i)) {
      return false;
    }
  }
  return true;
}
const result5 = every(arr, item => item > 0);

function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return true;
    }
  }
  return false;
}
const result6 = some(arr, item => item > 3);


/**
 * 数组去重
 */
function unique(arr) {
  const result = [];
  arr.forEach(item => {
    if (result.indexOf(item) === - 1) {
      result.push(item);
    }
  })
  return result;
}

function unique2(arr) {
  const result = [];
  const obj = {};
  arr.forEach(item => {
    if (obj[item] === undefined) {
      obj[item] = true;  
      result.push(item);
    }
  })
  return result;
}

const array1 = [1,2,3,1,2,5]
console.log(unique(array1));
console.log(unique2(array1));

// ES6的Set对象 更加方便去重
function unique3(arr) {
  return [...new Set(arr)]
}
console.log(unique3(array1));

function concat(arr, ...args) {
  const result = [...arr];
  args.forEach(item => {
    if(Array.isArray(item)) {
      result.push(...item);
    } else {
      result.push(item)
    }
  })
  return result;
}

console.log(concat(arr, [5,6,7], 8, 9));

function slice(arr, start, end) {
  if (arr.length === 0) return [];

  start = start || 0;
  if (start >= arr.length) {
    return []
  }

  end = end || arr.length;
  if (end < start) {
    end = arr.length;
  }

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i >= start && i < end) {
      result.push(arr[i]);
    }
  }
  return result;
}
const arrslice = [1,3,5,7,9,11,13,15];
console.log(slice(arrslice, 2, 5));

/**
 * 数组的扁平化
 * ES6 原生数组的flat函数还有一个层级的参数[depth]，这里没有实现
 * var newArray = arr.flat([depth]);
 */
function flat(arr) {
  let result = [];
  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    if (Array.isArray(element)) {
      result = result.concat(flat(element))
    } else {
      result.push(element)
    }
  }
  return result;
}
const arrflat = [1,3,[5,[7,9]],11,13,15];
console.log(flat(arrflat));

/**
 * Flat2
 * 使用some 和 concat 来实现
 */
function flat2(arr) {
  let result = [...arr];
  // 使用 concat 的一个特性，合并数组或添加元素，它接受多个参数
  while (result.some(item => Array.isArray(item))) {
    result = [].concat(...result);
  }
}

/**
 * 数组分块
 */
function chunk(arr, size = 1) {
  let result = [];
  let tmp = []; {
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      if (tmp.length === 0) {
        result.push(tmp)
      } 
      tmp.push(element);
      if (tmp.length === size){
        tmp = [];
      }
    }
  }
  return result;
}
const arrchunk = [1,3,5,7,9,11,13,15];
console.log(chunk(arrchunk));