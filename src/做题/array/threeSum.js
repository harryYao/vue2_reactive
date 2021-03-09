// 数组相关的题目
// 15. 三数之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 示例 1：
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

// 示例 2：
// 输入：nums = []
// 输出：[]

// 示例 3：
// 输入：nums = [0]
// 输出：[]

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/3sum

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let len = nums.length
  if (nums.length < 3) {
    return [];
  }
  let result = [];
  nums = nums.sort((a,b) => a - b)
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      break;
    }

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    let L = i + 1;
    let R = len -1;

    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        result.push(nums[i],nums[L],nums[R]);
        while (nums[L] === nums[L + 1]) {
          L++;
        }
        while (nums[R - 1] === nums[R]) {
          R--;
        }
        L++;
        R--;
      } else if (sum < 0) {
        L++;
      } else {
        R--;
      }
    }
    
  }
  return result;
};