/**
 * 主函数
 * @param {templateStr} HTML字符串 
 */
export default function(templateStr) {
  let index = 0;
  const stack1 = [];
  const stack2 = [];
  let rest = '';
  // 开始标记
  const startRegExp = /^\<([a-z]+[1-6]?)\>/;
  const endRegExp = /^\<\/([a-z]+[1-6]?)\>/;
  // 抓取结束标记前的文字
  const wordRegExp = /^([^\<]+)\<\/[a-z]+[1-6]?\>/;

  while (index < templateStr.length) {
    rest = templateStr.substring(index);
    if (startRegExp.test(rest)) {
      let tag = rest.match(startRegExp)[1];
      // console.log('111 开始标记————', tag);
      stack1.push(tag)
      stack2.push([])
      index += tag.length + 2
      // console.log(stack1, stack2);
    } else if (endRegExp.test(rest)) {
      let tag = rest.match(endRegExp)[1];
      // console.log('222 结束标记：',tag);
      // 此时，tag标签一定时和栈1 的顶部相同的
      if (tag == stack1[stack1.length - 1]) {
        stack1.pop();
      } else {
        throw new Error('检测到有不闭合标签')
      }
      index += tag.length + 3
      // console.log(stack1, stack2);

    } else if (wordRegExp.test(rest)) {
      // 识别遍历到的这个字符，是不是文字，并且不能全是空
      let word = rest.match(wordRegExp)[1]
      if (!/^\s+$/.test(word)) {
        // 全是空
        console.log('抓取到文字', word);
      }

      index += word.length
    } else {
      index ++
      }
    }
    return {}
  }