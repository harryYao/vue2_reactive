/** 真正的创建节点，将vnode创建dom，是孤儿节点，不进行插入 */
export default function createElement(vnode) {
  // 创建一个DOM节点
  let domNode = document.createElement(vnode.sel);
  // 有子节点还是有文本
  if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)) {
    // 内部是文字
    domNode.innerText = vnode.text;    
  } else if (Array.isArray(vnode.children) && vnode.children.length > 0) {
    // 内部是子节点，递归创建节点
    for (let i = 0; i < vnode.children.length; i++) {
      const ch = vnode.children[i];
      // console.log(ch);
      // 创建出它的DOM, 一旦调用createElement意味着：创建出了DOM了，并且它的elm属性指向了创建出的DOM,但是还没有上树，是个孤儿节点
      let chDOM = createElement(ch);
      // 上树
      domNode.appendChild(chDOM)
    }
  } else { 
    // 形态③ h('div', {}, h())
    // TODO
  }

  // 补充elm属性
  vnode.elm = domNode

  // 返回elm，elm属性是一个纯DOM对象
  return domNode  
  // return vnode.elm
}