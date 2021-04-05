
//从一道让我失眠的 Promise 面试题开始，深入分析 Promise 实现细节
// https://juejin.cn/post/6945319439772434469 


Promise.resolve().then(() => {
  console.log(0);
  return Promise.resolve(4);
}).then((res) => {
  console.log(res)
})

Promise.resolve().then(() => {
  console.log(1);
}).then(() => {
  console.log(2);
}).then(() => {
  console.log(3);
}).then(() => {
  console.log(5);
}).then(() =>{
  console.log(6);
})


// 执行结果：0、1、2、4、3、5、6 🤯

// TODO 使用自己手写的promise试下 是否和原生一致
