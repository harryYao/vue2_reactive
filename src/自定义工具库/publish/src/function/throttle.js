

// 2. 节流
// 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
export function throttle(fn) {
  let canRun = true;
  return function() {
    if (!canRun) return;
    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true;
    }, 500)
  }
}

export function throttle2(callback, wait) {
  let start = 0;
  return function(e) {
    let now = Date.now();
    if (now - start >= wait) {
      callback.call(this, e);
      start = now;
    }
  }
}
// 一般会在滚动，滑动等事件中使用
// 窗口调整 resize
// 页面滚动 scroll
// DOM元素拖拽 mousemove
// 抢购按钮疯狂点击 click