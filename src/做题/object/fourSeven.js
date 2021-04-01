// 简单的规则：您的函数应接受输入4和7。如果4输入，函数应返回7。如果7输入，函数应返回4。
// 输入的其他任何内容都应返回0。只有一个陷阱，您的函数不能包含if语句，
// switch语句或三元运算符（或eval函数，因为您可以绕开if要求来使用它）。



function fourSeven(n) {
  return { 7 : 4, 4 : 7 }[n] || 0
}

const fs = (n) => [0,0,0,0,7,0,0,4][n] || 0;

const fs2 = (n) => {
  const map = new Map();
  map.set(4, 7);
  map.set(7, 4);
  return map.get(n) || 0
}
// test fourSeven
console.log(fourSeven(4)); 
console.log(fourSeven(7)); 
console.log(fourSeven(0)); 
console.log(fourSeven(8)); 
console.log(fourSeven('a')); 
// test fs
console.log(fs(4)); 
console.log(fs(7)); 
console.log(fs(0)); 
console.log(fs(8)); 
console.log(fs('a'));
// test fs2
console.log(fs2(4)); 
console.log(fs2(7)); 
console.log(fs2(0)); 
console.log(fs2(8)); 
console.log(fs2('a')); 