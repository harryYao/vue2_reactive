// 题目描述
// 给你一个只包括二进制数的字符串 s 和整数 k，如果每个长度为 k 的二进制串都是 s 的字串（substring）返回 true，否则返回 false（注意：substring 和 subsequence 的区别）
// 例一：
// 输入: s = "00110110", k = 2
// 输出: true
// 解释: 长度为 2 的二进制串都有："00", "01", "10" 和 "11". 他们都是 s 的字串
// 复制代码
// 例二：
// 输入: s = "00110", k = 2
// 输出: true
// 复制代码
// 例三：
// 输入: s = "0110", k = 1
// 输出: true
// 解释: 长度为 1 的二进制串只有："0" 和 "1", 他们也都是 s 的字串 
// 复制代码
// 例四：
// 输入: s = "0110", k = 2
// 输出: false
// 解释: 长度为 2 的二进制串 "00" 不是 s 的字串（但是是子序列）
// 复制代码
// 例五：
// 输入: s = "0000000001011100", k = 4
// 输出: false

// 作者：anduinnwrynn
// 链接：https://juejin.cn/post/6939088602764836872

var hasAllCodes = function (s, k) {
  const set = new Set();
  for (let i = 0; i <= s.length - k; i++) {
    set.add(s.substr(i, k));
    if (set.size === Math.pow(2, k)) {
      return true;
    }
  }
  return false;
};
let s = "00110110";
let k = 2;
hasAllCodes(s, k);