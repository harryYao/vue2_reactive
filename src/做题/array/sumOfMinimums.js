
// 给定大小为2D的数组m * n。您的任务是在每一行中找到最小值的总和。

var test = [
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]
// 注意事项：
// 1. Math.min传的是多个参数，不是数组，所以需要解构
// 2. reduce的a参数需要初始化，可以写 a = 0,也可以在reduce第二个参数中传值

function sumOfMinimums(arr) {
  return arr.map(i => Math.min(...i)).reduce((a = 0, b) => a + b)
}
// 只是两个方法的顺序不同而已
function sumOfMinimums2(arr) {
  return arr.reduce((a, b) => a + Math.min(...b), 0)
}

sumOfMinimums(test)
sumOfMinimums2(test)

