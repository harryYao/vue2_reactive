
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

/**
 * 用来指定成功/失败回调函数的方法
 * 1> 如果当前promise 是resolved, 异步执行成功的回调函数onResolved
 * 2> 如果当前promise 是rejected, 异步执行成功的回调函数onRejected
 * 3> 如果当前promise 是pending, 保存回调函数，返回一个新的promise对象
 * 它的结果状态由onResolved或者onRejected执行的结果决定
 *  2.1). 抛出error ==> 变为rejected, 结果值为error
 *  2.2). 返回值不是promise  ==> 变为resolved, 结果为返回值
 *  2.1). 返回值是promise    ==> 由这个promise的决定新的promise的结果（成功/失败）
 * @param {*} onResolved 
 * @param {*} onRejected 
 */
Promise.prototype.then = function(onResolved, onRejected) {
  const self = this;
  onResolved = typeof onResolved === 'function' ? onResolved: value => value; // 将value向下传递
  onRejected = typeof onRejected === 'function' ? onRejected: reason => {
    throw reason
  }; // 将reason向下传递


  return new Promise((resolve, reject) => {

    /**
     * 1. 调用指定的回调函数
     * 2. 根据回调执行结果来更新返回promise的状态
     */
    function handle(callback) {
      try {
        const result = callback(self.data)
        if (!(result instanceof Promise)) {
          resolve(result);
        } else {
          result.then(
            value => resolve(value),
            reason => reject(reason)
          )
        }
      } catch (error) {
        reject(error);
      }
    }

    if (self.status === RESOLVED) {
      setTimeout(() => {
        handle(onRejected);
      })
    } else if (self.status === REJECTED) {
      setTimeout(() => {
        handle(onRejected)
      })
    } else {
      self.callbacks.push({
        onResolved(value) {
          handle(onResolved)
        },
        onRejected(reason) {
          handle(onRejected)
        }
      })
    }
  })
}


/**
 * 用来指定失败的回调函数的方法
 * catch是then的语法糖
 * @param {*} onRejected 
 * @returns 
 */
Promise.prototype.catch = function (onRejected) {
  return this.then(undefined, onRejected);
}

/**
 * 用来返回一个指定vlaue的成功的promise
 * value可能是一个一般的值, 也可能是promise对象
 * @returns 
 */
Promise.resolve = function() {
  return new Promise((resolve, reject) => {
    if (value instanceof Promise) {
      value.then(resolve, reject);
    } else {
      resolve(value);
    }
  })
}

/**
 * 用来返回一个指定reason的失败的promise
 * @returns 
 */
Promise.reject = function() {
  return new Promise((resolve, reject) => {
    reject(reason);
  })
}

export default Promise