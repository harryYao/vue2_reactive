import vnode from './vnode'

// 编写一个低配版的h函数，这个函数必须接受3个参数，缺一不可，暂不实现较复杂重载
// 形态① h('div', {}, 'text')
// 形态② h('div', {}, [])
// 形态③ h('div', {}, h())
export default function(sel, data, c) {
  if(arguments.length !=3 ) {
    throw new Error('必须接受3个参数，缺一不可，暂不实现较复杂重载')
  }

  // console.log(sel, data, c);
  if (typeof c == 'string' || typeof c == 'number') {
    return vnode(sel, data, undefined, c, undefined)
  } else if (Array.isArray(c)) {
    let children = [];
    for (let i = 0; i < c.length; i++) {
      if (!(typeof c[i] == 'object'  && c[i].hasOwnProperty('sel'))) {
        throw new Error('传入的数组中有项的结果不是h函数')
      }
      children.push(c[i])
    }
    return vnode(sel, data, children, undefined, undefined)
  } else if (typeof c == 'object' && c.hasOwnProperty('sel')) {
    let children = [c];
    return vnode(sel, data, children, undefined, undefined)
  } else {
    throw new Error('传入的第三个参数类型不对')
  }
};