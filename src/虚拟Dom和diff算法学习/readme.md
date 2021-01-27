## 本学习案例根据 尚硅谷邵山欢（考拉老师）Vue之虚拟DOM和diff算法

## 尚硅谷视频 https://www.bilibili.com/video/BV1v5411H7gZ?p=15


***

### 其中P15章，在updateChildren函数中, while循环完成后
### 插入多余newVndoe中，出现了bug。

### 看老师使用了   
```         
parentElm.insertBefore(createElement(newCh[i]), oldCh[oldStartIdx].elm) 
```
###  但是这是还有bug的 
###  复现方式如下
```
// test updateChildren  
const q1 = h('section', {}, [
  h('p', { key: 'p1' }, 'p1'),
  h('p', { key: 'p2' }, 'p2'),
  h('p', { key: 'p3' }, 'p3'),
]);
const q2 = h('section', {}, [
  h('p', { key: 'p1' }, 'p1'),
  h('p', { key: 'p3' }, 'p3'),
  h('p', { key: 'pppp' }, 'pppp'),
  h('p', { key: 'p2' }, 'p2'),
]);
```
###  插入pppp时就会报错，原因是 oldCh[oldStartIdx] 为null


### 根据源码是应该使用before
``` 
const before = newCh[newEndIdx + 1] == null ? null : newCh[newEndIdx + 1].elm;
```
### 但是before.elm为null, 其实整个newCh中匹配到的newVnode节点的elm都是为空
### 因为在前面代码patchVnode函数中，没有将oldVnode.elm赋值给newVnode.elm

```
export default function patchVnode(oldVnode, newVnode) {
  // 同一个节点，精细化比较

  // 判断新旧vnode是否是同一个对象
  if (oldVnode === newVnode) return;

  // 每次patchVnode时，都应将oldVnode.elm赋值给新的newVnode.elm
  newVnode.elm = oldVnode.elm;
  …………
}
```

### 至此才完成bug修复

***
### 另外createElement函数也没有写完成，还有一种h函数的 形态③ h('div', {}, h()) 也没有去做，后续我们自己补充吧

```
/** 真正的创建节点，将vnode创建dom，是孤儿节点，不进行插入 */
export default function createElement(vnode) {
  // 创建一个DOM节点
  let domNode = document.createElement(vnode.sel);
  // 有子节点还是有文本
  if(vnode.text != '' && (vnode.children == undefined || vnode.children.length == 0)) {
    // 内部是文字
    domNode.innerText = vnode.text;    
  } else if (Array.isArray(vnode.children) && vnode.children.length ###  0) {
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
    // TODO
  }
}
```