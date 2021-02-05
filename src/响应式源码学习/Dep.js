var uid = 0;
export default class Dep {
  constructor() {
    // console.log("我是DEP构造函数！", uid);
    this.id = uid++;
    // 用数组来存储自己的订阅者。subs是英语subscribies订阅者的意思
    // 这里存放的是Watcher的实例
    this.subs = [];
  }

  // 添加订阅
  addSub(sub) {
    // 这个简易代码会导致 Watcher 指数级增加，真实情况应该是模板中存在几个表达式，这里有几个Watcher,根据Watcher的id来添加，若已存在则不再重复添加
    
    // this.subs.push(sub);

    // 修复BUG
    if(!this.subs.find(m => m.id == sub.id)) {
      console.log('添加订阅', sub);
      this.subs.push(sub);
    }

    // console.log('收集到一个订阅者：', sub.id)
  }

  // 添加依赖
  depend() {
    // console.log('Dep.depend() 函数执行');
    // Dep.target就是一个我们自己指定的全局位置，用window.target也行，只要全局唯一，没有歧义
    if (Dep.target) {
      this.addSub(Dep.target);
    }
  }

  // 通知更新
  notify() {

    // 浅克隆一份
    const subs = this.subs.slice();
    console.log("我是notify", subs.length);
    // 遍历
    for (let i = 0, l = subs.length; i < l; i++) {
      subs[i].update();
    }
  }
}
