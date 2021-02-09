
import print from './js/print'
// import $ from 'jquery'

// import sum from './test'

// console.log(sum(1,2,3,5,6,8));

function add(a,b) {
  return a+ b;
}

console.log(add(10,20));
print('bbbbbb');

// console.log($);


/**
 * 通过js代码，让某个文件被单独打包成一个chunk
 * import 动态导入语法：能将某个文件单独打包
 * webpackChunkName: 'test' 给chunk包命名
 */
import(/* webpackChunkName: 'test' */'./test.js')
  .then(( { sum, fn } ) => {
    console.log('文件加载成功', sum, fn);
    // 文件加载成功
    console.log(sum(1,2,3,5,6,8));
    console.log(fn('1350', '*****'));
  })
  .catch(() => {
    console.log('文件加载失败');
  })






// console.log(fn('1350', '*****'));