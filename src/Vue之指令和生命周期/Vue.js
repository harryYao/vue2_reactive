import observe from '../响应式源码学习/observe';
import Watcher from '../响应式源码学习/Watcher'
import Compile from './Compile'

export default class Vue {
  constructor(options) {
    // 
    this.$options = options || {}
    // 数据
    this._data = options.data || undefined;
    //数据要变成响应式
    observe(this._data);

    this._initData();

    this._initWatch();

    // 模板编译
    new Compile(options.el, this);

    options.created();
  }

  _initData() {
    var self = this;
    Object.keys(this._data).forEach(key => {
      Object.defineProperty(self, key, {
        get() {
          return self._data[key];
        },
        set(newval) {
          self._data[key] = newval
        }
      })
    })
  }
  _initWatch() {
    var self = this;
    var watch = this.$options.watch;
    Object.keys(watch).forEach(key => {
      new Watcher(self, key, watch[key]);
    })
  }

}