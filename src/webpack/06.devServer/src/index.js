import './style/iconfont.css'

import {map} from 'yaoxin-utils'

function add(a,b) {
  return a+ b;
}

console.log(add(10,20));

let arr = [1,2,3,4,5];
let res = map(arr, (item) => {
  return item * item
})

console.log(res);