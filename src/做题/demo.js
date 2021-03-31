
// 给定大小为2D的数组m * n。您的任务是在每一行中找到最小值的总和。

var test = [
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]

function sumOfMinimums(arr) {
  arr.map(i => Math.min(i)).reduce((a,b) => a+b)
}
function sumOfMinimums2(arr) {
  arr.reduce((a,b) => a + Math.min(...b), 0)
}
sumOfMinimums(test)



// 简单的规则：您的函数应接受输入4和7。如果4输入，函数应返回7。如果7输入，函数应返回4。
// 输入的其他任何内容都应返回0。只有一个陷阱，您的函数不能包含if语句，
// switch语句或三元运算符（或eval函数，因为您可以绕开if要求来使用它）。
function fourSeven(n){
  return { 7 : 4, 4 : 7 }[n] || 0
}


// 用最精炼的代码实现数组非零非负最小值 index
// 例如：[10,21,0,-7,35,7,9,23,18] 输出 5, 7 最小
function getIndex(arr){
  // todo
  // method1 过滤找到最小，再算indexof
  // return arr.indexOf(Math.min(...arr.filter(n => n > 0)))

  // method2 reduce方法
  return arr.reduce((num, v, i) => v > 0 && v < arr[num] ? i: num, 0)
}


// 53. 最大子序和
// 示例 1：
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currentMax = 0;
  let res = nums[0];
  nums.map(item => {
    currentMax = Math.max(currentMax + item, item);
    res = Math.max(currentMax, res);
  })
  return res;
};