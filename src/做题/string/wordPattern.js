// 题目描述
// 给定一种规律 pattern 和一个字符串 str ，判断 str 是否遵循相同的规律。

// 这里的 遵循 指完全匹配，例如， pattern 里的每个字母和字符串 str 中的每个非空单词之间存在着双向连接的对应规律。

// 示例1:

// 输入: pattern = "abba", str = "dog cat cat dog"
// 输出: true
// 示例 2:

// 输入:pattern = "abba", str = "dog cat cat fish"
// 输出: false
// 示例 3:

// 输入: pattern = "aaaa", str = "dog cat cat dog"
// 输出: false
// 示例 4:

// 输入: pattern = "abba", str = "dog dog dog dog"
// 输出: false
// 说明:
// 你可以假设 pattern 只包含小写字母， str 包含了由单个空格分隔的小写字母。    

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/word-pattern
// 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。


// 思路 1
// 定义两 map
// 在两个 map 中双方的键值对互换, 这样就确认了 对应关系

var wordPattern = function (pattern, s) {
    let words = s.split(' ')
    if (pattern.length != words.length) return false

    let word2ch = new Map()
    let ch2word = new Map()
    //    debugger
    for(let [i, word] of words.entries()) {
    
    // 这里将pattern 写成了 word debugger了 才找出原因
      const ch = pattern[i]
      
      // && 的优先级 高于 ||
      if (word2ch.get(ch) && word2ch.get(ch) != word || ch2word.has(word) && ch2word.get(word) !== ch) {
        return false
      }
      word2ch.set(ch, word)
      ch2word.set(word, ch)
    }
    return true
};
 
// 以下 为看了评论处 小宇 的精美回答后，挑选 且 修改后的回答

// 思路1 通过结合两者的值 在进行去重处理

var wordPattern1 = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;
  let h = [];
  for (let i = 0; i < words.length; i++) {
    h[i] = pattern[i] + "," + words[i];
  }
  const len = new Set(h).size;
  return len == new Set(pattern).size && len == new Set(words).size;
}

// 思路2 通过各自字元素在 字符串 或者数组中 的索引值的和来判断

var wordPattern2 = function (pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;
    // 这两个值不能赋值 为 0， 下方的 indexOf 会出现 -1
    let leftSum = '', rightSum = '', l = -1
    while (++l < words.length) {
        leftSum += pattern.indexOf(pattern[l])
        rightSum += words.indexOf(words[l])
    }
    return leftSum === rightSum
}


// 思路3 这里直接 逐位比较 与上一个答案有类似之处

var wordPattern3 = function (pattern, s) {
    const words = s.split(" ");
    if (pattern.length !== words.length) return false;
    for (let i = 0; i < words.length; i++) {
        if (words.indexOf(words[i]) != pattern.indexOf(pattern[i])) return false
    }
    return true
}

// ================== //

var wordPattern_self = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) return false;
  const map = new Map();
  for (let i = 0; i < words.length; i++) {
    if (map.get(pattern[i])) {
      if (map.get(pattern[i]) !== words[i]) {
        return false
      }
    } else {
      map.set(pattern[i], words[i])
    }
  }
  return true
}