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
  drop2,
  dropRight,
  dropRight2
 } from './array/array_method.js'

// 自定义axios 
export { axios } from './axios/index.js'

// event-bind
export { addEventListener } from './event-bind/index.js'

// event-bus
export { eventBus } from './event-bus/index.js'

// function
export { apply } from './function/apply.js'
export { call } from './function/call.js'
export { bind } from './function/bind.js'
export { debounce } from './function/debounce.js'
export { throttle, throttle2 } from './function/throttle.js'

// object
export { newInstance, myInstance } from './object/object.js'
export { clone1, clone2, deepClone1, deepClone2, deepClone3, deepClone4 } from './object/clone.js'

// pub-sub
export { PubSub } from './pub-sub/index.js'

// string
export { reverseString, palindrome, truncate } from './string/index.js'

import Promise from './promise/index.js';

export { Promise }

import SingleInstance from './singleInstance/index.js';

export { SingleInstance }