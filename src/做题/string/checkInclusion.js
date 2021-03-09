// 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的排列。

// 换句话说，第一个字符串的排列之一是第二个字符串的子串。

// 示例1:
// 输入: s1 = "ab" s2 = "eidbaooo"
// 输出: True
// 解释: s2 包含 s1 的排列之一 ("ba").
//  

// 示例2:
// 输入: s1= "ab" s2 = "eidboaoo"
// 输出: False


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
  let i = 0;
  let end = s1.length;
  let sub = '';
  let s1_d = [...s1].reverse().join('');
  while (end <= s2.length) {
    sub = s2.slice(i, end);
    if (sub == s1 || sub == s1_d) {
      return true;
    } else {
      i++;
      end++;
    }
  }
  return false;
};

checkInclusion('ab','eidbaooo') // --> true
checkInclusion('ab','eidboaoo') // --> false

