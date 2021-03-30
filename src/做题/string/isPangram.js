

// 📖 题目2：Detect Pangram
// 七巧板是包含至少一个字母的每个字母的句子。 
// 例如，句子“快速的棕色狐狸跳过懒惰的狗” "The quick brown fox jumps over the lazy dog"是一个连字符，因为它至少一次使用字母A-Z（大小写无关）。
// 给定一个字符串，检测它是否是一个七巧板。 如果是，则返回True，否则返回False。 忽略数字和标点符号。
// 也就是说a-z每个字母都使用过至少一次，就返回true。

// 解题
const isPangram = s => {
  s = s.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(x =>s.indexOf(x) !== -1);
}

// 解法2
const isPangram2 = s => new Set(s.toLowerCase().split('')).size === 27;

var teststr = "The quick brown fox jumps over the lazy dog";
isPangram2(teststr);

