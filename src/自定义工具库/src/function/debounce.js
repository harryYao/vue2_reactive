// 1. 防抖
// 触发高频事件后n秒内函数只会执行一次，如果n秒内高频事件再次被触发，则重新计算时间
// input的输入事件

export function debounce(fn) {
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
