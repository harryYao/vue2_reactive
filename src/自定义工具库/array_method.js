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
