// 1. 两数之和 (two-sum)
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
// 你可以按任意顺序返回答案。

const { map } = require("jquery");

// 示例 1：
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

// 示例 2：
// 输入：nums = [3,2,4], target = 6
// 输出：[1,2]

// 示例 3：
// 输入：nums = [3,3], target = 6
// 输出：[0,1]


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  
  const myMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    myMap.set(element, i)
    if (i > 0) {
      if (myMap.has(target - element)) {
        return [ myMap.get(target - element), i]
      }
    }
  }
  return []
};

// 先建立一个map结构，利用map能很方便建立值和坐标的映射。
// 顺序扫描数组，对每一个元素，如果在 map 中找能组合给定值的另一半数字，
// 找到了直接返回对这两数下标就行。如果找不到就把这个数字存入 map 中，等待扫到另一半数字的时候，再取出来返回结果。

const myMap = new Map()

