// 1. 防抖
// 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
// input的输入事件

function debounce(fn) {
  let timeout = null;
  return function () {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn.apply(this, arguments);
      // 重置下定时器
      timeout = null;
    }, 500)
  }
}


// 2. 节流
// 高频事件触发，但在n秒内只会执行一次，所以节流会稀释函数的执行频率
function throttle(fn) {
  let canRun = true;
  return function() {
    if (!canRun) return;
    setTimeout(() => {
      fn.apply(this, arguments);
      canRun = true;
    }, 500)
  }
}

function throttle2(callback, wait) {
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