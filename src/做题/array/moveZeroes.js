

// 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。

// 示例:
// 输入: [0,1,0,3,12]
// 输出: [1,3,12,0,0]

// 说明:
// 必须在原数组上操作，不能拷贝额外的数组。
// 尽量减少操作次数。

// 来源：力扣（LeetCode）
// 链接：https://leetcode-cn.com/problems/move-zeroes

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let i = 0;
  let j = 0;
  // let res = [];
  while (i < nums.length) {
    if (nums[i] != 0) {
      // 数组的结构交换赋值
      [nums[i], nums[j]] = [nums[j], nums[i]];
      // res.push([JSON.stringify(nums),i,j]);
      i++;
      j++;
    } else {
      i++;
    }
  }
  // console.log(res);
};

var nums = [0,1,0,3,12];
moveZeroes(nums);