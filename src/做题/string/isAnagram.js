
// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
// 原题链接 👉 242. 有效的字母异位词
// 示例 1:
// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 复制代码
// 示例 2:
// 输入: s = "rat", t = "car"
// 输出: false
// 复制代码
// 说明:
// 你可以假设字符串只包含小写字母。

// 作者：前端小叶子
// 链接：https://juejin.cn/post/6939011449947684895

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;

  let arr_s = s.split('');   
  let arr_t = t.split('');   
  return arr_s.sort().toString() === arr_t.sort().toString();
};


var isAnagram2 = function(s, t) {
  if (s.length !== t.length) return false;

  let strmap = {};
  for (const char of s) {
    strmap[char] = (strmap[char] || 0) + 1;
  }
  console.log(strmap);
  for (const char of t) {
    if (!strmap[char]) return false;
    strmap[char] --;
  }
  
  return true
};


console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "cat"));