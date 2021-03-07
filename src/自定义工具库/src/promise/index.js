/**
 * Promise构造函数
 * @param {*} excutor 
 */
function Promise(excutor) {
  const self = this // Promise的实例对象
  self.status = PENDING // 状态属性, 初始值为pending, 代表初始未确定的状态
  self.data = undefined // 用来存储结果数据的属性, 初始值为undefined
  self.callbacks = [] // {onResolved(){}, onRejected(){}}
}