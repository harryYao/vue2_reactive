// 📖 题目1：连续重复次数最长的字符
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


// 📖 题目3：如果元素出现n次以上，则删除该元素的出现

// 任务
// 给定一个列表lst和一个数字N，创建一个新列表，其中最多包含N次每个lst数，
// 而无需重新排序。例如，如果N = 2，并且输入为[1,2,3,1,2,1,2,3]，则取[1,2,3,1,2,3]，
// 删除下一个[1,2 ]，因为这将导致1和2在结果中出现3次，然后取3，从而得出[1,2,3,1,2,3]。

// 解题
function deleteNth(arr,n){
  const obj = {}
  return arr.filter(a => {
    obj[a]?obj[a]++:(obj[a]=1)
    return obj[a] <= n
  })
}