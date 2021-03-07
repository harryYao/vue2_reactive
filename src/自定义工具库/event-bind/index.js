    // 自定义事件委托
    function addEventListener(el, type, fn, selector) {
      if (typeof el === 'string') {
        el = document.querySelector(el);
      }

      // 没传子元素，就直接绑定el的事件
      if (!selector) {
        el.addEventListener(type, fn)
      } else {
        el.addEventListener(type, function(e) {
          const target = e.target;
          console.log(target);
          // 与选择器是否匹配 matches 
          if (target.matches(selector)) {
            fn.call(target, e);
          }
        })
      }
    }