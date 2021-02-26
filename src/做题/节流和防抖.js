// 1. 防抖
// 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
// input的输入事件

function debounce(fn) {
  let timeout = null;
  return function () {
    clearTimeout(timeout);
    timeout = setInterval(() => {
      fn.apply(this, arguments);
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
// 一般会在滚动，滑动等事件中使用