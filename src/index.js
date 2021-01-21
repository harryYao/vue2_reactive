
import observe from './observe'

var obj = {
  a: {
    b: {
      m: 'mm'
    }
  },
  c: 10
}

observe(obj);
obj.c++;
console.log(obj.a.b.m);