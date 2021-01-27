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


// test updateChildren  
const ss1 = h('section', {}, [
  h('p', { key: 'p1' }, 'p1'),
  h('p', { key: 'p2' }, 'p2'),
  h('p', { key: 'p3' }, 'p3'),
]);
const ss2 = h('section', {}, [
  h('p', { key: 'p1' }, [
    h('span', {}, '我'),
    h('span', {}, ' 爱 '),
    h('span', {}, ' 你 '),
  ]),
  h('p', { key: 'p2' }, 'p2'),
  h('p', { key: 'p3' }, 'p3'),
]);


// test updateChildren  
const ss4 = h('section', {}, [
  h('p', { key: 'p1' }, 'p1'),
  h('p', { key: 'p2' }, 'p2'),
  h('p', { key: 'p3' }, 'p3'),
]);
const ss3 = h('section', {}, [
  h('p', { key: 'p1' }, 'P1 new text'),
  h('p', { key: 'p2' }, 'p2 lala'),
  h('p', { key: 'p3' }, 'p3 haha'),
  h('p', { key: 'p4' }, 'p4'),
  h('p', { key: 'p5' }, 'p5'),
  h('p', { key: 'p6' }, 'p6'),
]);



// test updateChildren  
const q1 = h('section', {}, [
  h('p', { key: 'p1' }, 'p1'),
  h('p', { key: 'p2' }, 'p2'),
  h('p', { key: 'p3' }, 'p3'),
  h('p', { key: 'p4' }, 'p4'),
  h('p', { key: 'p5' }, 'p5'),
]);
// test updateChildren  
const q2 = h('section', {}, [
  h('p', { key: 'p2' }, 'p2'),
  h('p', { key: 'pppp' }, 'pppp'),
  h('p', { key: 'p3' }, 'p3'),
  h('p', { key: 'p1' }, 'p1'),
  h('p', { key: 'p5' }, 'p5'),
  h('p', { key: 'nnnn' }, 'nnmmmmn'),
  h('p', { key: 'kk' }, 'kkkkkkkkkk'),
  h('p', { key: 'p4' }, 'p4'),
]);


patch(container, q1)

btn.onclick = () => {
  patch(q1, q2)
}

