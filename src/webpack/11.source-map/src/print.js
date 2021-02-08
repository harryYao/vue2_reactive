export default function print() {
  console.log('我是print模块1');
  console.log(new Date().getTime());
  console.log('我是print模块2')();
}