import Watcher from "../响应式源码学习/Watcher";

export default class Compile {
  constructor(el, vue) {
    // vue实例
    this.$vue = vue;
    // 挂载点
    this.$el = document.querySelector(el)
    // 如果用户传入了挂载点
    if (this.$el) {
      // 调用函数， 让节点变成虚拟节点，正常使用AST，这里演示轻量级的，所以使用document.createDocumentFragment创建的fragment
      let $fragment = this.node2Fragment(this.$el);

      // 编译
      this.compile($fragment)
      // 替换好的内容上树
      this.$el.appendChild($fragment)
    }
  }

  node2Fragment(el) {
    // https://www.runoob.com/jsref/met-document-createdocumentfragment.html
    var fragment = document.createDocumentFragment();
    // console.log(fragment);
    // 测试代码，用户理解 createDocumentFragment 的fragment 的作用
    // var child = el.firstElementChild
    // fragment.appendChild(child)
    var child;
    // 让所有DOM节点，都进入fragment 
    while(child = el.firstChild) {
      fragment.appendChild(child)
    }
    return fragment;
  }

  compile(el) {
    // console.log(el);
    var childNodes = el.childNodes;
    var self = this;

    childNodes.forEach(node => {
      var text = node.textContent;
      // console.log('childNodes.forEach', node);

      var reg = /\{\{(.*)\}\}/;
      if (node.nodeType == 1) {
        self.compileElement(node)
      } else if (node.nodeType == 3 && reg.test(text)) {
        console.log('匹配到了');
        let name = text.match(reg)[1].trim()
        self.compileText(node, name);
      }
    })
  }

  compileElement(node) {
    // 这里的方便之处在于不是将HTMl结构看成字符串，
    var nodeAttrs = node.attributes;
    var self = this;
    // console.log(nodeAttrs);
    // 类数组对象 变为数组
    // Array.prototype.slice.call(nodeAttrs).forEach(attr => {
    [].slice.call(nodeAttrs).forEach(attr => {
      // 这里分析指令
      var attrName = attr.name;
      var value = attr.value;
      // console.log(attrName, value);
      var dir = attrName.substring(2);

      if (attrName.indexOf('v-') == 0) {
        // v-开头的就是 指令
        if(dir == 'model') {
          console.log('发现了model指令');

          // 《BUG》 这里双向绑定还是存在问题的， Watcher函数的get()方法被指数级调用！！
          // 尚未解决，正在排查中 。。。

          // 已解决
          // 在 Class DEP 中的addSub函数  
          // 修复BUG
          // if(!this.subs.find(m => m.id == sub.id)) {
          //   console.log('添加订阅', sub);
          //   this.subs.push(sub);
          // }
          // // 要利用下构造函数定义的id, 订阅已经存在，无需重复添加。老师这里漏了。

          new Watcher(self.$vue, value, tt => {
            console.log(`compileElement ==> 监控到了${value}变化了`, value);
            node.value = tt;
          })
          var v = self.getVueVal(self.$vue, value);
          node.value = v;

          node.addEventListener('input', e => {
            var newVal = e.target.value;
            self.setVueVal(self.$vue, value, newVal)
            v = newVal
          })

        } else if(dir == 'if'){
          console.log('发现了if指令');
        }
      }
    })
  }

  compileText(node, name) {
    // console.log('compileText',this.$vue, name);
    // console.log('compileText', this.getVueVal(this.$vue, name));
    node.textContent = this.getVueVal(this.$vue, name); // 小心空格问题。
    new Watcher(this.$vue, name, value => {
      console.log(` compileText ==> 监控到了${name}变化了`, value);
      node.textContent = value;
    });
  }

  getVueVal(vue, exp) {    
    var val = vue;
    exp = exp.split('.');
    exp.forEach(k => {
      // console.log('getVueVal exp.forEach k', k, val);
      val = val[k]
    })
    // console.log('getVueVal', val);
    return val;
  }
  setVueVal(vue, exp, value) {
    var val = vue;
    exp = exp.split('.');
    exp.forEach((k, i) => {
      // console.log('getVueVal exp.forEach k', k, val);
      if (i < exp.length - 1) {
        val = val[k]
      } else {
        val[k] = value
      }
    })
  }
}

