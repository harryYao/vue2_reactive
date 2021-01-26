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

const myVode5 = h('section', {}, '我是文本')
const myVode6 = h('section', {}, [
  h('p', {}, 'ss1'),
  h('p', {}, 'vvvvvvvvvvvvv'),
  h('p', {}, 'ssssss'),
]);


const ss1 = h('section', {}, [
  h('p', { key: 'p1' }, 'p1'),
  h('p', { key: 'p2' }, 'p2'),
  h('p', { key: 'p3' }, 'p3'),
]);
const ss2 = h('section', {}, [
  h('p', { key: 'p1' }, 'p1'),
  h('p', { key: 'p2' }, 'p2'),
  h('p', { key: 'ph' }, 'ph'),
  h('p', { key: 'p3' }, 'p3'),
  h('p', { key: 'pm' }, 'pm'),
]);

patch(container, ss1)

btn.onclick = () => {
  patch(ss1, ss2)
}

