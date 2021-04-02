


// 53. 最大子序和
// 示例 1：
// 输入：nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出：6
// 解释：连续子数组 [4,-1,2,1] 的和最大，为 6 。

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let currentMax = 0;
  let res = nums[0];
  nums.map(item => {
    currentMax = Math.max(currentMax + item, item);
    res = Math.max(currentMax, res);
    console.log('currentMax', currentMax);
    console.log('res', res);
  })
  return res;
};

const nums = [-2,1,-3,4,-1,2,1,-5,4,5,7,8];
// const nums = [-2,1,-3,4,-1,22,1,-5,4];
const nums = [-2,1,13,4,-1,2,1,-5,4];
maxSubArray(nums)
