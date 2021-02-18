
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
 * sw 代码必须运行在服务器上
 *   --> nodejs
 *   --> 
 *      npm i serve -g
 *      serve -s build  启动服务器，将build目录下所有的资源作为静态资源暴露出去
 * 
 *    本地ip打开时，navigator.serviceWorker is undefined
 *    需要使用localhost 打开才有用
 * 
 * - Local:            http://localhost:5000         window.isSecureContext = true
 * - On Your Network:  http://169.254.14.255:5000    window.isSecureContext = false
 */
if('serviceWorker' in navigator) {
  console.log('serviceWorker in navigator');
  window.addEventListener('load', () => {
    console.log('window load');
    navigator.serviceWorker
      .register('/service-worker.js')
      .then(() => {
        console.log('SW注册成功了！');
      })
      .catch(() => {
        console.log('SW注册失败了！');
      })
  })
}