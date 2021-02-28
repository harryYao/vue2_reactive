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