
import observe from './observe'
import Watcher from './Watcher'

var obj = {
  a: {
    b: {
      m: 'mm'
    }
  },
  c: 10,
  d: [1,2,3,4]
}

observe(obj);
// obj.a.b.m = 'gg'
// obj.c++;
// console.log(obj.a.b.m);
// obj.d.push(8)
// console.log(obj);
// obj.d.splice(2, 1, [10, 20]);
// console.log(obj.d);

new Watcher(obj, 'a.b.m', (val) => {
  console.log('监控触发了：yeah! ☆☆☆☆☆：', val);
})

obj.a.b.m = 'haha'
// console.log(obj)