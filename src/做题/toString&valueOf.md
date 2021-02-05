
## 题目

```
let a = ?
if (a == 1 && a == 2 && a == 3) {
  console.log(1)
} 
```

看到题目一脸懵逼，看了下答案
```
let a = {
  i: 0,
  toString() {
    return ++this.i;
  }
}
```
sodisgaそですか, 原来是利用了 == 这个方法会隐式调用toString() 做了文章
那么到这就完了么？

假如我是面试官，是不是应该问问 
> 为什么 == 会调用 toString()? 

> 说一说 == 和 === 的区别？

> 除了 使用toString，还有什么办法么？

之类的问题？顺着这个思路，我们再深入一点吧！
…………
一顿搜索猛如虎
…………

> js调用==进行比较时，不同与===，双等号会触发类型转换（类型不同时）

```
let obj2 = {
  a: 1,
  toString:function() {
    console.log("toString")
    return this.a
  },
  valueOf:function() {
    console.log("valueOf")
    return this.a
  }
}
```