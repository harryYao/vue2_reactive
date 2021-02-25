// 输出以下代码运行结果，为什么？
// 如果希望每隔 1s 输出一个结果，应该如何改造？注意不可改动 square 方法

const list = [1, 2, 3]
const square = num => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(num * num)
    }, 1000)
  })
}

function test() {
  list.forEach(async x=> {
    const res = await square(x)
    console.log(res)
  })
}
test()

// 几乎同时输出
1
4
9

// forEach是不能阻塞的，默认是请求并行发起，所以是同时输出1、4、9。

// 串行解决方案：

async function test() {
  for (let i = 0; i < list.length; i++) {
    let x = list[i]
    const res = await square(x)
    console.log(res)
  }
}
// 当然，也可以用 for of 语法，就是帅：

async function test() {
  for (let x of list) {
    const res = await square(x)
    console.log(res)
  }
}
// 还有一个更硬核点的，也是 axios 源码里所用到的，利用 promise 本身的链式调用来实现串行。

let promise = Promise.resolve()
function test(i = 0) {
  if (i === list.length) return
  promise = promise.then(() => square(list[i]))
  test(i + 1)
}
test()
