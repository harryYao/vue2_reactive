

// 20. 有效的括号
// 一、题目描述:
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。
// 示例 1：

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true
// 示例 3：

// 输入：s = "(]"
// 输出：false
// 示例 4：

// 输入：s = "([)]"
// 输出：false

// 作者：魔王哪吒
// 链接：https://juejin.cn/post/6934840493352157197
// 来源：掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。


// 此方法妙不可言，因为最内部总是其中的一对括号，效率应该有点低 
var isValidStr = function (s) {
  while (s.includes("[]") || s.includes("()") || s.includes("{}")) {
    s = s.replace("[]", "").replace("()", "").replace("{}", "");
  }
  s = s.replace("[]", "").replace("()", "").replace("{}", "");
  return s.length === 0;
};


// 此方法使用栈的思想，比较常规
var isValidStr2 = function (s) {
  let valid = true;
  const stack = [];
  const mapper = {
    "{": "}",
    "[": "]",
    "(": ")",
  };

  for (let i in s) {
    const v = s[i];
    if (["(", "[", "{"].indexOf(v) > -1) {
      stack.push(v);
    } else {
      const peak = stack.pop();
      if (v !== mapper[peak]) {
        return false;
      }
    }
  }

  if (stack.length > 0) return false;

  return valid;
};
