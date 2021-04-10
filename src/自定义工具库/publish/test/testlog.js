const testLog = (name, fn) => {
  
  const logStyle = 'color: #A23598; font-style: italic';
  console.group(`Test Array Function: ${name}`);
  console.log('%c' + fn.toString(), logStyle);
  const result = fn();
  console.log('result:', result);
  console.groupEnd();
}

// export default testLog;