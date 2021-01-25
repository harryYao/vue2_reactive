import Dep from "./Dep";

var uid = 0;
export default class Watcher {
  constructor(target, expression, callback) {
    // console.log("我是Watcher构造函数！", target, expression);
    this.id = uid++;
    this.target = target;
    this.getter = parsePath(expression);
    this.callback = callback;
    this.value = this.get();
  }

  update() {
    this.run();
  }

  run() {
    this.getAndInvoke(this.callback);
  }

  getAndInvoke(cb) {
    const value = this.get();

    if (value !== this.value || typeof value == "object") {
      const oldValue = this.value;
      this.value = value;
      cb.call(this.target, value, oldValue);
    }
  }

  get() {
    // console.log("Watcher的get函数被调用，设置Dep.target，进入依赖的收集阶段");
    // 让全局的Dep.target设置为Watcher本身，那么就进入依赖的收集阶段
    Dep.target = this;

    const obj = this.target;
    var value;
    try {
      console.log("try this.getter()");
      value = this.getter(obj);
    } finally {
      Dep.target = null;
    }

    return value;
  }
}

function parsePath(str) {
  var segments = str.split(".");
  return (obj) => {
    for (let i = 0; i < segments.length; i++) {
      if (!obj) return;
      obj = obj[segments[i]];
    }
    return obj;
  };
}
