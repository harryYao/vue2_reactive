// 已知如下数组：
// var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];
// 编写一个程序将数组扁平化去并除其中重复部分数据，最终得到一个升序且不重复的数组

// 作者：木易杨说
// 链接：https://juejin.cn/post/6844903885488783374
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


var arr = [ [1, 2, 2], [3, 4, 5, 5], [6, 7, 8, 9, [11, 12, [12, 13, [14] ] ] ], 10];


Array.from(new Set(arr.flat(Infinity))).sort((a,b)=>{ return a-b})

// 这个没有去重
arr.toString().split(",").sort((a,b)=>{ return a-b})

function flat(arr) {
  return Array.from(new Set(arr.toString().split(','))).sort((a,b) => { return a -b} )
}
  