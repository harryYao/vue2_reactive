// # 3.1 冒泡排序（Bubble Sort）
// https://biaochenxuying.cn/articleDetail?article_id=5d4059b896cf541789792485




// 冒泡排序（未优化）
const bubbleSort = arr => {
  console.time('改进前冒泡排序耗时');
  const length = arr.length;
  if (length <= 1) return;
  // i < length - 1 是因为外层只需要 length-1 次就排好了，第 length 次比较是多余的。
  for (let i = 0; i < length - 1; i++) {
      // j < length - i - 1 是因为内层的 length-i-1 到 length-1 的位置已经排好了，不需要再比较一次。
      for (let j = 0; j < length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              const temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
          }
      }
  }
  console.log('改进前 arr :', arr);
  console.timeEnd('改进前冒泡排序耗时');
};

// 冒泡排序（已优化）
const bubbleSort2 = arr => {
  console.time('改进后冒泡排序耗时');
  const length = arr.length;
  if (length <= 1) return;
  // i < length - 1 是因为外层只需要 length-1 次就排好了，第 length 次比较是多余的。
  for (let i = 0; i < length - 1; i++) {
      let hasChange = false; // 提前退出冒泡循环的标志位
      // j < length - i - 1 是因为内层的 length-i-1 到 length-1 的位置已经排好了，不需要再比较一次。
      for (let j = 0; j < length - i - 1; j++) {
          if (arr[j] > arr[j + 1]) {
              const temp = arr[j];
              arr[j] = arr[j + 1];
              arr[j + 1] = temp;
              hasChange = true; // 表示有数据交换
          }
      }

      if (!hasChange) break; // 如果 false 说明所有元素已经到位，没有数据交换，提前退出
  }
  console.log('改进后 arr :', arr);
  console.timeEnd('改进后冒泡排序耗时');
};


// 测试
const arr = [7, 8, 4, 5, 6, 3, 2, 1];
bubbleSort(arr);
// 改进前 arr : [1, 2, 3, 4, 5, 6, 7, 8]
// 改进前冒泡排序耗时: 0.289306640625 ms

const arr2 = [7, 8, 4, 5, 6, 3, 2, 1];
bubbleSort2(arr2);
// 改进后 arr : [1, 2, 3, 4, 5, 6, 7, 8]
// 改进后冒泡排序耗时: 0.159912109375 ms



// ## 2.插入排序
const insertionSort = array => {
    const len = array.length;
    if (len <= 1) return

    let preIndex, current;
    for (let i = 1; i < len; i++) {
        preIndex = i - 1; //待比较元素的下标
        current = array[i]; //当前元素
        while (preIndex >= 0 && array[preIndex] > current) {
            //前置条件之一: 待比较元素比当前元素大
            array[preIndex + 1] = array[preIndex]; //将待比较元素后移一位
            preIndex--; //游标前移一位
        }
        if (preIndex + 1 != i) {
            //避免同一个元素赋值给自身
            array[preIndex + 1] = current; //将当前元素插入预留空位
            console.log('array :', array);
        }
    }
    return array;
};

// 测试
const array = [5, 4, 3, 2, 1];
console.log("原始 array :", array);
insertionSort(array);
// 原始 array:    [5, 4, 3, 2, 1]
// array:           [4, 5, 3, 2, 1]
// array:           [3, 4, 5, 2, 1]
// array:           [2, 3, 4, 5, 1]
// array:           [1, 2, 3, 4, 5]


// 折半插入排序
const binaryInsertionSort = array => {
    const len = array.length;
    if (len <= 1) return;

    let current, i, j, low, high, m;
    for (i = 1; i < len; i++) {
        low = 0;
        high = i - 1;
        current = array[i];

        while (low <= high) {
            //步骤 1 & 2 : 折半查找
            m = (low + high) >> 1; // 注: x>>1 是位运算中的右移运算, 表示右移一位, 等同于 x 除以 2 再取整, 即 x>>1 == Math.floor(x/2) .
            if (array[i] >= array[m]) {
                //值相同时, 切换到高半区，保证稳定性
                low = m + 1; //插入点在高半区
            } else {
                high = m - 1; //插入点在低半区
            }
        }
        for (j = i; j > low; j--) {
            //步骤 3: 插入位置之后的元素全部后移一位
            array[j] = array[j - 1];
            console.log('array2 :', JSON.parse(JSON.stringify(array)));
        }
        array[low] = current; //步骤 4: 插入该元素
    }
    console.log('array2 :', JSON.parse(JSON.stringify(array)));
    return array;
};

const array2 = [5, 4, 3, 2, 1];
console.log('原始 array2:', array2);
binaryInsertionSort(array2);
// 原始 array2:  [5, 4, 3, 2, 1]
// array2 :     [5, 5, 3, 2, 1]
// array2 :     [4, 5, 5, 2, 1]
// array2 :     [4, 4, 5, 2, 1]
// array2 :     [3, 4, 5, 5, 1]
// array2 :     [3, 4, 4, 5, 1]
// array2 :     [3, 3, 4, 5, 1]
// array2 :     [2, 3, 4, 5, 5]
// array2 :     [2, 3, 4, 4, 5]
// array2 :     [2, 3, 3, 4, 5]
// array2 :     [2, 2, 3, 4, 5]
// array2 :     [1, 2, 3, 4, 5]