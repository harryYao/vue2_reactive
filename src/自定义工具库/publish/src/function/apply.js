export function apply(fn, obj, args) {
  if (obj === undefined || obj === null) {
    obj = globalThis; // 全局对象
  }
  // 为obj添加临时方法
  obj.__temp__ = fn;
  // 执行方法
  let result = obj.__temp__(...args);
  // 删除临时方法
  delete obj.__temp__;

  return result;
}
