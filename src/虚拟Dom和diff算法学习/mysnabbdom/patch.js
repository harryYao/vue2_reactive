import vnode from './vnode'
import createElement from './createElement'
import patchVnode from './patchVnode';

export default function patch(oldVnode, newVnode) {
  // 判断oldVnode 是否是虚拟节点
  if (oldVnode.sel == '' || oldVnode.sel == undefined) {
    oldVnode = vnode(oldVnode.tagName.toLowerCase(), {}, [], undefined, oldVnode)
  }

  // 判断oldVnode 和newVnode是否是同一个节点
  if (oldVnode.key === newVnode.key && oldVnode.sel == newVnode.sel) {
    console.log('oldVnode 和newVnode是同一个节点!');  
    patchVnode(oldVnode, newVnode);
  } else {
    // 非同一个节点，暴力插入，删除旧的
    // 获取创建的dom节点
    let newVnodeElm = createElement(newVnode, oldVnode.elm)
    // 插入到老节点之前
    if(oldVnode.elm.parentNode && newVnodeElm) {
      oldVnode.elm.parentNode.insertBefore(newVnodeElm, oldVnode.elm) 
    }

    // 删除老节点
    oldVnode.elm.parentNode.removeChild(oldVnode.elm)
  }
}
