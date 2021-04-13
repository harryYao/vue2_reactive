
export function map(arr, callback){
  let result = [];
  for (let i = 0; i < arr.length; i++) {
      result.push(callback(arr[i], i))
  }
  return result;
}

export function reduce(arr, callback, initVal) {
  let result = initVal;
  for (let i = 0; i < arr.length; i++) {
    result = callback(result, arr[i])
  }
  return result;
}

export function filter(arr, callback) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i)
    res && result.push(arr[i])
  }
  return result;
}

export function find(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i)
    if (res) {
      return arr[i]
    }
  }
  return undefined;
}

export function findIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    let res = callback(arr[i], i)
    if (res) {
      return i
    }
  }
  return -1;
}

export function every(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (!callback(arr[i], i)) {
      return false;
    }
  }
  return true;
}

export function some(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (callback(arr[i], i)) {
      return true;
    }
  }
  return false;
}


/**
 * 数组去重
 */
export function unique(arr) {
  const result = [];
  arr.forEach(item => {
    if (result.indexOf(item) === - 1) {
      result.push(item);
    }
  })
  return result;
}

export function unique2(arr) {
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

// ES6的Set对象 更加方便去重
export function unique3(arr) {
  return [...new Set(arr)]
}


export function concat(arr, ...args) {
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

export function slice(arr, start, end) {
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

/**
 * 数组的扁平化
 * ES6 原生数组的flat函数还有一个层级的参数[depth]，这里没有实现
 * var newArray = arr.flat([depth]);
 */
 export function flat(arr) {
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

/**
 * Flat2
 * 使用some 和 concat 来实现
 */
export function flat2(arr) {
  let result = [...arr];
  // 使用 concat 的一个特性，合并数组或添加元素，它接受多个参数
  while (result.some(item => Array.isArray(item))) {
    result = [].concat(...result);
  }
  return result;
}

/**
 * 数组分块
 */
export function chunk(arr, size = 1) {
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
// console.log(chunk(arrchunk));


// 语法: difference(arr1, arr2)
// 功能: 得到当前数组中所有不在arr中的元素组成的数组(不改变原数组)
// 例子: difference([1,3,5,7], [5, 8]) ==> [1, 3, 7]
export function difference(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    const element = arr1[i];
    if (arr2.indexOf(arr1[i]) === -1) {
      result.push(arr1[i])
    }
  }
  return result;
}
// console.log(difference([1,3,5,7], [5, 8]));

export function difference2(arr1, arr2 = []) {
  if(arr1.length === 0) return [];
  if(arr2.length === 0) return arr1;

  // return arr1.filter(item => arr2.indexOf(item) === -1)
  return arr1.filter(item => !arr2.includes(item))
}
// console.log(difference2([1,3,5,7], [5, 8]));



// pull(array, ...values):
// 删除原数组中与value相同的元素, 返回所有删除元素的数组
// 说明: 原数组发生了改变
// 如: pull([1,3,5,3,7], 2, 7, 3, 7) ===> 原数组变为[1, 5], 返回值为[3,3,7]

export function pull(arr, ...values) {
  // 这个没有删除
  // return arr.filter(item => ![...values].includes(item))

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (values.includes(arr[i])) {
      result.push(arr[i])
      arr.splice(i, 1)
      i--;
    }    
  }
  return result;
}
const arrpull = [1,3,5,3,7]
// console.log(pull(arrpull, 2, 7, 3, 7));
// console.log(arrpull);

// pullAll(array, values):
// 功能与pull一致, 只是参数变为数组
// 如: pullAll([1,3,5,3,7], [2, 7, 3, 7]) ===> 数组1变为[1, 5], 返回值为[3,3,7]
export function pullAll(arr, values) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (values.includes(arr[i])) {
      result.push(arr[i])
      arr.splice(i, 1)
      i--;
    }    
  }
  return result;
}
const arrpull2 = [1,3,5,3,7,2,6,8]
// console.log(pullAll(arrpull2, [2, 7, 3, 7]));
// console.log(arrpull2);



// drop(array, count)
// 得到当前数组过滤掉左边count个后剩余元素组成的数组
// 说明: 不改变当前数组, count默认是1
// 如: drop([1,3,5,7], 2) ===> [5, 7]
export function drop(arr, count) {
  if (arr.length === 0 || arr.length <= count) return [];
  if (count <= 0) return arr;
  return arr.slice(count)
}
function drop2(arr, count) {
  return arr.filter((item, index) => index >= count)
}
// slice方法可以传负数，所以需要判断
// 所以filter方法比较简单，下同

const arr_drop = [1,2,3,4,5,7]
// console.log(drop(arr_drop, 2));

// dropRight(array, count)
// 得到当前数组过滤掉右边count个后剩余元素组成的数组
// 说明: 不改变当前数组, count默认是1
// 如: dropRight([1,3,5,7], 2) ===> [1, 3]

export function dropRight(arr, count) {
  if (arr.length === 0 || arr.length <= count) return [];
  if (count <= 0) return arr;
  return arr.slice(0, arr.length - count)
}

export function dropRight2(arr, count) {
  return arr.filter((item, index) => index < (arr.length - count))
}
const arr_drop_right = [1,2,3,4,5,7]
// console.log(dropRight(arr_drop_right, 2));