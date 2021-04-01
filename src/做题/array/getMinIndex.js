// 用最精炼的代码实现数组非零非负最小值 index
// 例如：[10,21,0,-7,35,7,9,23,18] 输出 5, 7 最小


function getMinIndex(arr){
  // method1 过滤找到最小，再算indexof
  return arr.indexOf(Math.min(...arr.filter(n => n > 0)))
}
function getMinIndex2(arr){
  // method2 reduce方法
  return arr.reduce((num, v, i) => v > 0 && v < arr[num] ? i: num, 0)
}

// test 
const getTestArr = (n, max = 10000) => {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(Math.floor(Math.random() * max - max / 2))
  }
  return result;
}
const test = getTestArr(100000, 8000000);

let now = new Date().getTime();
console.log('getMinIndex:', getMinIndex(test));
console.log('getMinIndex 消耗时间：', new Date().getTime() - now);

now = new Date().getTime();
console.log('getMinIndex2:', getMinIndex2(test));
console.log('getMinIndex2 方法 消耗时间：', new Date().getTime() - now);

// 
// 测试发现,在这个数量级getTestArr(20000, 1000000); 性能差异不大，却发现方法2有bug

// BUG： reduce初始值 num 不可以设置0， 第一个为负数时无法就出错了！

function getMinIndex2(arr){
  // 修复方法2的bug，找到最大值的index为初始值 
  return arr.reduce((num, v, i) => v > 0 && v < arr[num] ? i: num, arr.indexOf(Math.max(...arr)))
}
