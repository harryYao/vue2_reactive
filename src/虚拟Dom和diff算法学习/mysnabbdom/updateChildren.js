import createElement from './createElement';
import patchVnode from './patchVnode'

export default function updateChildren(parentElm, oldCh, newCh) {
    // 旧前 及其节点
    let oldStartIdx = 0;
    let oldStartVnode = oldCh[0]
    // 新前
    let newStartIdx = 0;
    let newStartVnode = newCh[0]
    // 旧后
    let oldEndIdx = oldCh.length - 1
    let oldEndVnode = oldCh[oldEndIdx]
    // 新后
    let newEndIdx = newCh.length - 1
    let newEndVnode = newCh[newEndIdx]

    while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        if (sameVnode(oldStartVnode, newStartVnode)) {
            patchVnode(oldStartVnode, newStartVnode)
            oldStartVnode = oldCh[++oldStartIdx]
            newStartVnode = newCh[++newStartIdx]
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
            patchVnode(oldEndVnode, newEndVnode)
            oldEndVnode = oldCh[--oldEndIdx]
            newEndVnode = newCh[--newEndIdx]
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
            patchVnode(oldStartVnode, newEndVnode)
            // 插入到旧后的后面
            parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling)
            oldStartVnode = oldCh[++oldStartIdx]
            newEndVnode = newCh[--newEndIdx]
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
            patchVnode(oldEndVnode, newStartVnode)
            // 插入到新前的前面
            parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm)
            oldEndVnode = oldCh[--oldEndIdx]
            newStartVnode = newCh[++newStartIdx]
        } else {
            // 都没找到的情况
        }
    }

}

function sameVnode(a, b) {
    return a.key === b.key && a.sel == b.sel
}