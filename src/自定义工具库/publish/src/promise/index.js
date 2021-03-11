const PENDIGN = 'pending' // 初始未确认的状态
const RESOLVED = 'resolved'  // 成功的状态
const REJECTED = 'rejected' // 失败的状态

/**
 * Promise构造函数
 * @param {*} excutor 
 */
function Promise(excutor) {
  const self = this // Promise的实例对象
  self.status = PENDING // 状态属性, 初始值为pending, 代表初始未确定的状态
  self.data = undefined // 用来存储结果数据的属性, 初始值为undefined
  self.callbacks = [] // {onResolved(){}, onRejected(){}}

  /** 将promise的状态改为成功 */
  function resolve(value) {
    if (self.status !== PENDIGN) return;

    self.status = RESOLVED; // 将状态修改为成功
    self.data = value; // 保存成功的value

    // 启动一个延迟时间为0的定时器, 在定时器的回调中执行所有成功的回调
    if (self.callbacks.length > 0) {
      setTimeout(() => {
        self.callbacks.forEach(cbsObj => {
          cbsObj.onResolved(value);
        })
      })
    }
  }

  /** 将状态改为失败，指定失败的reason */
  function reject(reason) {
    if (self.status !== PENDING) return;

    self.status = REJECTED; // 将状态修改为失败
    self.data = reason; // 保存成功的value

    // 启动一个延迟时间为0的定时器, 在定时器的回调中执行所有失败的回调
    if (self.callbacks.length > 0) {
      setTimeout(() => {
        self.callbacks.forEach(cbsObj => {
          cbsObj.onRejected(reason);
        })
      })
    }
  }

  // 调用excutor来启动异步任务
  try {
    excutor(resolve, reject)
  } catch (error) {
    // 执行出错，当前promise变为失败
    reject(error)
  }
}


export default Promise