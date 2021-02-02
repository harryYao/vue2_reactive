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


// 📖 题目4：重复编码器
// 本练习的目的是将字符串转换为新字符串，
// 其中新字符串中的每个字符是"("该字符在原始字符串中仅出现一次，还是")"该字符在原始字符串中出现多次。
// 确定字符是否重复时忽略大写。
// 例子
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

// 解题
function duplicateEncode(word){
  word.toLowerCase().split('').map((a, i, w) => {
    return w.indexOf(a) == w.lastIndexOf(a) ? '(': ')'
  }).join('')
}
// 技巧在于2点
// 1. map的第三个参数为数组本身
// 2. 这个判断 indexOf == lastIndexOf



// 给定大小为2D的数组m * n。您的任务是在每一行中找到最小值的总和。

var test = [
  [1, 2, 3, 4, 5],       // minimum value of row is 1
  [5, 6, 7, 8, 9],       // minimum value of row is 5
  [20, 21, 34, 56, 100]  // minimum value of row is 20
]

function sumOfMinimums(arr) {
  arr.map(i => Math.min(i)).reduce((a,b) => a+b)
}
function sumOfMinimums2(arr) {
  arr.reduce((a,b) => a + Math.min(...b), 0)
}
sumOfMinimums(test)



// 简单的规则：您的函数应接受输入4和7。如果4输入，函数应返回7。如果7输入，函数应返回4。
// 输入的其他任何内容都应返回0。只有一个陷阱，您的函数不能包含if语句，
// switch语句或三元运算符（或eval函数，因为您可以绕开if要求来使用它）。
function fourSeven(n){
  return { 7 : 4, 4 : 7 }[n] || 0
}