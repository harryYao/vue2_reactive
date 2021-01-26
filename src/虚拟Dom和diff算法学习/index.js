import h from './mysnabbdom/h'
import patch from './mysnabbdom/patch'

const container = document.getElementById('container')
const btn = document.getElementById('btn')
const myVode1 = h('h1', {}, 'hello world!!!!!');
const myVode2 = h('ul', {}, [
  h('li', {}, 'A'),
  h('li', {}, 'B'),
  h('li', {}, 'C'),
  h('li', {}, 'D')
]);
const myVode3 = h('ul', {}, [
  h('li', {}, 'A'),
  h('li', {}, 'B'),
  h('li', {}, [
    h('div', {}, [
      h('p', {}, '路飞'),
      h('p', {}, '索隆'),
      h('p', {}, '山治'),
      h('p', {}, '娜美'),
      h('p', {}, '乌索普')
    ])
  ]),
  h('li', {}, 'D')
]);
const myVode4 = h('div', {}, [
  h('p', {}, 'ss1'),
  h('p', {}, h('span', {}, 'jiojio')),
  h('p', {}, [
    h('span', {}, 'haha'),
    h('span', {}, 'lala'),
  ]),
]);

patch(container, myVode1)

btn.onclick = () => {
  patch(myVode1, myVode3)
}

