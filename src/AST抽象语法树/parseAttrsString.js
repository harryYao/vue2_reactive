// 处理属性字符串
export default function(attrsStr) {
  // `class="aa bb cc" id="my_title"`
  if (attrsStr == undefined) return [];

  let isYinhao = false
  let point  = 0;
  let result = [];
  attrsStr += ' '
  for (let i = 0; i < attrsStr.length; i++) {
    const char = attrsStr[i];
    if (char == '"') {
      isYinhao = !isYinhao
    } else if (char == ' ' && !isYinhao) {
      let t = attrsStr.substring(point , i)
      if (!/^\s*$/.test(t)) {
        result.push(t.trim())
      }
      point = i
    } 
  }
  result = result.map(item => {
    const o = item.match(/^(.+)="(.+)"$/)
    return {name: o[1], value: o[2]}
  })
  console.log(result);
  return result
}