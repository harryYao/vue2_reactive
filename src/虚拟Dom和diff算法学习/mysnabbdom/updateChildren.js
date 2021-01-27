import createElement from './createElement';
import patchVnode from './patchVnode'

/*****************************************************************
 * 此时新老都有children，最复杂情况, diff核心算法所在
 * 四种命中查找算法顺序，命中一种就不再往下判断
 * ①、新前与旧前
 * ②、新后与旧后
 * ③、新后与旧前 
 * ④、新前与旧后
 *****************************************************************/
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

    // 缓存
    let keyMap = null;

    while(oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
        // 首先不是4个命中的判断，而是略过已经标记undefined的项
        if (oldStartVnode == null || oldCh[oldStartIdx] == undefined) {
            oldStartVnode = oldCh[++oldStartIdx] 
        } else if (oldEndVnode == null || oldCh[oldEndIdx] == undefined) {
            oldEndVnode = oldCh[--oldEndIdx]
        }else if (newStartVnode == null || newCh[newStartIdx] == undefined) {
            newStartVnode = newCh[++newStartIdx]
        }else if (newEndVnode == null || newCh[newEndIdx] == undefined) {
            newEndVnode = newCh[--newEndIdx]
        } else if (sameVnode(oldStartVnode, newStartVnode)) {
            console.log('命中1 oldStartVnode newStartVnode');
            patchVnode(oldStartVnode, newStartVnode)
            oldStartVnode = oldCh[++oldStartIdx]
            newStartVnode = newCh[++newStartIdx]
        } else if (sameVnode(oldEndVnode, newEndVnode)) {
            console.log('命中2 oldEndVnode newEndVnode');
            patchVnode(oldEndVnode, newEndVnode)
            oldEndVnode = oldCh[--oldEndIdx]
            newEndVnode = newCh[--newEndIdx]
        } else if (sameVnode(oldStartVnode, newEndVnode)) {
            console.log('命中3 oldStartVnode newEndVnode');
            patchVnode(oldStartVnode, newEndVnode)
            // 插入到旧后的后面
            parentElm.insertBefore(oldStartVnode.elm, oldEndVnode.elm.nextSibling)
            oldStartVnode = oldCh[++oldStartIdx]
            newEndVnode = newCh[--newEndIdx]
        } else if (sameVnode(oldEndVnode, newStartVnode)) {
            console.log('命中4 oldEndVnode newStartVnode');
            patchVnode(oldEndVnode, newStartVnode)
            // 插入到新前的前面
            parentElm.insertBefore(oldEndVnode.elm, oldStartVnode.elm)
            oldEndVnode = oldCh[--oldEndIdx]
            newStartVnode = newCh[++newStartIdx]
        } else {
            // 4种都没找到的情况 （核心中的核心）
            // console.log('********4种都没找到的情况', `===> oldStartIdx:${oldStartIdx}, oldEndIdx:${oldEndIdx}, newStartIdx:${newStartIdx}, newEndIdx:${newEndIdx}`);
            // 制作keyMap，缓存
            if (!keyMap) {
                keyMap = {}
                for (let i = oldStartIdx; i <= oldEndIdx; i++) {
                    const key = oldCh[i].key;
                    if (key != undefined) {
                        keyMap[key] = i;
                    }                    
                }
            }
            console.log('keyMap', keyMap);

            // 寻找当前这项（newStartIdx）在keymap中的映射的位置序号
            const idxInOld = keyMap[newStartVnode.key]
            if (idxInOld == undefined) {
                // 没找到表示是全新的项
                console.log('keyMap 没找到表示是全新的项', newStartIdx, newCh[newStartIdx].text);
                parentElm.insertBefore(createElement(newCh[newStartIdx]), oldStartVnode.elm)
            } else {
                // 找到了，表示已存在, 需要移动和更新
                console.log(`keyMap 找到${idxInOld} 表示已存在, key:${newStartVnode.key}`);
                const elmToMove = oldCh[idxInOld];
                patchVnode(elmToMove, newStartVnode);
                oldCh[idxInOld] = undefined;
                parentElm.insertBefore(elmToMove.elm, oldStartVnode.elm)
            }
            newStartVnode = newCh[++newStartIdx];
        }
    }
    console.log(`while循环完毕 ===> oldStartIdx:${oldStartIdx}, oldEndIdx:${oldEndIdx}, newStartIdx:${newStartIdx}, newEndIdx:${newEndIdx}`);
    // console.log('循环完毕：', oldStartIdx, oldEndIdx, newStartIdx, newEndIdx );
    //匹配结束后， 继续看看有没有剩余节点
    if (newStartIdx <= newEndIdx) {
        // new还有剩余节点没有处理，那么应该是新增
        // 插入的标杆
        const before = newCh[newEndIdx + 1] == null ? null: newCh[newEndIdx + 1].elm;
        
        for (let i = newStartIdx; i <= newEndIdx; i++) {
            // insertBefore 自动识别null，如果是null则自动加到队尾去，和appendChild一致
            console.log('new还有剩余节点没有处理，那么应该是新增', oldStartIdx, newCh[i].text);
            // parentElm.insertBefore(createElement(newCh[i]), before) // 源码如此，但是视频课程改为如下，是有bug的 TODO
            parentElm.insertBefore(createElement(newCh[i]), oldCh[oldStartIdx].elm)
        }
    } else if (oldStartIdx <= oldEndIdx){
        console.log(oldCh);
        // old还有剩余节点没有处理，那么应该要删除
        for (let i = oldStartIdx; i <= oldEndIdx; i++) {
            // oldCh[i] && 
            parentElm.removeChild(oldCh[i].elm)
        }
    }

}

function sameVnode(a, b) {
    return a.key === b.key && a.sel == b.sel
}