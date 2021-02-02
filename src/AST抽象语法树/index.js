import parse from "./parse";

var templateStr = `
  <div>
    <h3 id="mytitle" class="title">你好</h3>
    <ul>
      <li>A</li>
      <li>B</li>
      <li>C</li>
    </ul>
    <div>
      <div>haha</div>
    </div>
  </div>
`;


const rst = parse(templateStr)
console.log(rst);