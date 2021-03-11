export function axios( {method, url, params, data} ) {
  method = method.toUpperCase();

  return new Promise((resolve, reject) => {
    // 四步骤
    // 1. 创建对象
    const xhr = new XMLHttpRequest();
    // 2. 初始化
    // 处理下 params 对象 a=10&b=20
    let str = '';
    for (const k in params) {
      str += `${k}=${params[k]}&`
    }
    str = str.slice(0, -1);
    xhr.open(method, url + '?' + str);

    // 3. 发送
    if(method === 'POST' || method === 'PUT') {
      // Content-type mime类型设置
      xhr.setRequestHeader('Content-type', 'application/json');
      // 设置请求体
      xhr.send(JSON.stringify(data))
    } else {
      xhr.send();
    }
    xhr.responseType = 'json'
    // 4. 处理结果
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4) {
        // 判断响应状态码 2xx
        if (xhr.status >= 200 && xhr.status < 300) {
          // 成功的状态
          resolve({
            status: xhr.status,
            message: xhr.statusText,
            body: xhr.response
          })
        } else {
          reject(new Error('请求失败，'+ xhr.status))
        }
      }
    }
  })
}

axios.get = function(url, options) {
  // 发送 AJAX 请求 GET
  return axios(Object.assign(options, {method: 'GET', url: url}))
}
axios.post = function(url, options) {
  // 发送 AJAX 请求 POST
  return axios(Object.assign(options, {method: 'POST', url: url}))
}
axios.put = function(url, options) {
  // 发送 AJAX 请求 PUT
  return axios(Object.assign(options, {method: 'PUT', url: url}))
}
axios.delete = function(url, options) {
  // 发送 AJAX 请求 DELETE
  return axios(Object.assign(options, {method: 'DELETE', url: url}))
}