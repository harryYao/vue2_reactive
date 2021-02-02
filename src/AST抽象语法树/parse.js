import parseAttrsString from './parseAttrsString'

/**
 * 主函数
 * @param {templateStr} HTML字符串 
 */
export default function(templateStr) {
  let index = 0;
  const stack1 = [];
  const stack2 = [{children: []}];
  let rest = '';
  // 开始标记
  const startRegExp = /^\<([a-z]+[1-6]?)(\s[^\<]+)?\>/;
  // 结束标记
  const endRegExp = /^\<\/([a-z]+[1-6]?)\>/;
  // 抓取结束标记前的文字
  const wordRegExp = /^([^\<]+)\<\/[a-z]+[1-6]?\>/;

  while (index < templateStr.length) {
    rest = templateStr.substring(index);
    if (startRegExp.test(rest)) {
      let match = rest.match(startRegExp);
      let tag = match[1];
      let attrs = match[2];
      console.log('111 开始标记————', attrs);
      stack1.push(tag)
      stack2.push({ tag: tag, children: [], attrs: parseAttrsString(attrs) })
      index += tag.length + 2 + (attrs ? attrs.length : 0) 
      // console.log(stack1, stack2);
    } else if (endRegExp.test(rest)) {
      let tag = rest.match(endRegExp)[1];
      // console.log('222 结束标记：',tag);
      const pop_tag = stack1.pop();
      // 此时，tag标签一定时和栈1 的顶部相同的
      if (tag == pop_tag) {
        const pop_arr = stack2.pop();
        if (stack2.length > 0) {
          stack2[stack2.length - 1].children.push(pop_arr)
        }
      } else {
        throw new Error('检测到有不闭合标签')
      }
      index += tag.length + 3
      // console.log(stack1, JSON.stringify( stack2))

    } else if (wordRegExp.test(rest)) {
      // 识别遍历到的这个字符，是不是文字，并且不能全是空
      let word = rest.match(wordRegExp)[1]
      if (!/^\s+$/.test(word)) {
        // 全是空
        console.log('抓取到文字', word);
        // 改变stack2栈顶元素
        stack2[stack2.length - 1].children.push({ 'text': word, 'type': 3 })
      }

      index += word.length
    } else {
      index ++
      }
    }
    console.log(stack2[0]);
    return stack2[0]
  }