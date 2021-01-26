import createElement from './createElement'

export default function patchVnode(oldVnode, newVnode) {
  // 同一个节点，精细化比较

  // 判断新旧vnode是否是同一个对象
  if (oldVnode === newVnode) return;

  //判断newVnode有没有text属性
  if (newVnode.text != undefined && (newVnode.children == undefined || newVnode.children.length == 0)) {
    console.log('新节点有text属性', newVnode.text);
    if (newVnode.text != oldVnode.text) {
      oldVnode.elm.innerText = newVnode.text;
    }
  } else {
    console.log('新节点没有text属性，即有children属性');
    // 判断oldVnode有没有children
    if (oldVnode.children == undefined || oldVnode.children.length == 0) {
      // 老节点没有children属性，有text属性时，清空text，再添加newVnode的children节点
      oldVnode.elm.innerText = '';
      // 遍历
      for (let i = 0; i < newVnode.children.length; i++) {
        let dom = createElement(newVnode.children[i])
        oldVnode.elm.appendChild(dom)
      }
    } else {
      // 此时新老都有children，最复杂情况, diff核心算法所在
      /*****************************************************************
       * 四种命中查找算法顺序，命中一种就不再往下判断
       * ①、新前与旧前
       * ②、新后与旧后
       * ③、新后与旧前
       * ④、新前与旧后
       *****************************************************************/

    }
  }
}






/*****************************************************************
 * 正常思维下的 算两个数组直接的变化，新增XX,删除XX,位置变动XX
 * 这样过于复杂，不是好算法，废弃……
 *****************************************************************/
  // // 此时新老都有children，最复杂情况
  // let index = 0;
  // for (let i = 0; i < newVnode.children.length; i++) {
  //   const ch = newVnode.children[i];
  //   // 在久节点children是否存在
  //   let isExit = false;
  //   // 再次遍历oldVnode的children
  //   for (let j = 0; j < oldVnode.children.length; j++) {
  //     if (oldVnode.children[j].sel == ch.sel && oldVnode.children[j].key == ch.key) {
  //       isExit = true;
  //     }
  //   }
  //   if (!isExit) {
  //     console.log(ch, i);
  //     let dom = createElement(ch);
  //     if (index < oldVnode.children.length) {
  //       oldVnode.elm.insertBefore(dom, oldVnode.children[index].elm)
  //     } else {
  //       oldVnode.elm.appendChild(dom)
  //     }
  //   } else {
  //     index++
  //     // 存在不一定位置一致，还要判断位置
  //     if(i != j) {
  //     }
  //   }
  // }