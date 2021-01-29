// 题目1：连续重复次数最长的字符
// 对于给定的字符串s找到连续重复次数最长的字符c（或C），然后返回：[c, l]
// 其中l（或L）是重复的长度。如果有两个或更多个相同的字符l，则按出现的顺序返回第一个。
// 对于空字符串返回：
// ["", 0]

// 解题
const longestRepetition = s => s ?
  s.match(/(.)\1*/g)
    .reduce((m,n) => m.length > n.length ? m: n)
    .split().map(m => [m[0], m.length]) :
  ['', 0];