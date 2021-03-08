
const PubSub = {
  // 订阅的唯一ID
  id: 1,
  // 频道与回调保存容器
  callbacks: {
    // pay: {
    //   token_1: fn,
    //   token_2: fn2
    // }
  }
};

/**
 * 订阅频道
 */
PubSub.subscribe = function(channel, callback) {
  let token = 'token_' + this.id++;
  if (!this.callbacks[channel]) {
    this.callbacks[channel] = {}
  }
  this.callbacks[channel][token] = callback;
  return token;
}

/**
 * 发布消息
 */
PubSub.publish = function(channel, data) {
  if (this.callbacks[channel]) {
    Object.values(this.callbacks[channel]).forEach(callback => {
      callback(data);
    })
  }
}

/**
 * 取消订阅
  1). 没有传值, flag为undefined 清空所有订阅
  2). 传入token字符串    取消对应token的订阅
  3). msgName字符串 频道名称，全部取消
 */
PubSub.unsubscribe = function (flag) {
  if (!flag) {
    this.callbacks = {};
  } else if (typeof flag === 'string'){
    // 判断是否 token_ 开头
    if (flag.indexOf('token_') === 0) {
      let callbackObj = Object.values(this.callbacks).find(obj => obj.hasOwnProperty(flag));
      if (callbackObj) {
        delete callbackObj[flag]
      }
    } else {
      // 表明是一个频道的名称
      delete this.callbacks[flag]
    }
  }
}

export { PubSub }