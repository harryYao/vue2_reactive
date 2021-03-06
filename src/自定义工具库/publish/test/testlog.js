const testLog = (name, fn) => {
  try {
    const logStyle = 'color: #A23598; font-style: italic';
    console.group(`Test Array Function: ${name}`);
    console.time(name + '花费时间：');
    console.log('%c' + fn.toString(), logStyle);
    const result = fn();
    console.log('result:', result);
    console.timeEnd(name + '花费时间：');
    console.groupEnd();  
  } catch (error) {
    console.error(error);
  }
}

const log = (msg, color = '#43bb88', fontsize = '12px', isBold = false) => {
  console.log(`%c${msg}`, `color: ${color};font-size: ${fontsize}; ${isBold?'font-weight: bold;':''}`)
}
// export default testLog;