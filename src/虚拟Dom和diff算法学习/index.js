import h from './mysnabbdom/h'

var myVode1 = h('div', {}, [
  h('p', {}, 'ss1'),
  h('p', {}, h('span', {}, 'jiojio')),
  h('p', {}, [
    h('span', {}, 'haha'),
    h('span', {}, 'lala'),
  ]),
]);
console.log(myVode1)