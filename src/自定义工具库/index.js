// 数组自定义函数
export { 
  map,
  reduce, 
  filter, 
  find, 
  findIndex, 
  every, 
  some,
  unique,
  unique2,
  unique3,
  concat,
  slice,
  flat,
  flat2,
  chunk,
  difference,
  difference2,
  pull,
  pullAll,
  drop,
  dropRight
 } from './src/array/array_method.js'

// 自定义axios 
export { axios } from './src/axios/index.js'

// event-bind
export { addEventListener } from './src/event-bind/index.js'

// event-bus
export { eventBus } from './src/event-bus/index.js'

// function
export { apply } from './src/function/apply.js'
export { call } from './src/function/call.js'
export { bind } from './src/function/bind.js'
export { debounce } from './src/function/debounce.js'
export { throttle } from './src/function/throttle.js'

// object
export { newInstance, myInstance } from './src/object/object.js'
export { clone1, clone2, deepClone1, deepClone2, deepClone3, deepClone4 } from './src/object/clone.js'

// pub-sub
export { PubSub } from './src/pub-sub/index.js'

// string
export { reverseString, palindrome, truncate } from './src/string/index.js'

