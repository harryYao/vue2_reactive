const eventBus = {
  // 保存类型和回调的容器
  callbacks: {}
};

// 绑定事件
eventBus.on = function(type, callback) {
  if (this.callbacks[type]) {
    this.callbacks[type].push(callback)
  } else {
    this.callbacks[type] = [callback]
  }
}

// 触发事件
eventBus.emit = function(type, data) {
  if (this.callbacks[type]) {
    this.callbacks[type].forEach(fn => {
      fn(data);
    })
  }
}

// 解绑事件
eventBus.off = function(type) {
  if (type) {
    delete this.callbacks[type]
  } else {
    this.callbacks = {}
  }
}