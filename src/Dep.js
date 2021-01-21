export default class Dep {
    constructor() {
        console.log('我是DEP构造函数！');
    }
    notify() {
        console.log('我是notify');
    }
}