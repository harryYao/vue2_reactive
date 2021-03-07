/**
 * 字符串反转
 * @param { * } str 
 */
function reverseString(str) {
  // 字符串转为数组
  // let arr = str.split('');
  let arr = [...str];
  return arr.reverse().join('');
}

/**
 * 字符串是否回文
 * @param {*} str 
 */
function palindrome(str) {
  return reverseString(str) === str;
}

/**
 * 截断并补充...
 * @param {*} str 
 * @param {*} size 
 */
function truncate(str, size) {
  return str.slice(0, size) + '...'
}