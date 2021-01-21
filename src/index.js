
import observe from './observe'

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
// obj.c++;
// console.log(obj.a.b.m);
obj.d.push(8)
console.log(obj.d);