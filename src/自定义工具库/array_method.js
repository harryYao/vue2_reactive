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