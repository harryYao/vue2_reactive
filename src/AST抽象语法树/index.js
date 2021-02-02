import parse from "./parse";

var templateStr = `
  <div>
    <h3>你好</h3>
    问问
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