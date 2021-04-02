// 给你两个有序整数数组 nums1 和 nums2，请你将 nums2 合并到 nums1 中，使 nums1 成为一个有序数组。
// 初始化 nums1 和 nums2 的元素数量分别为 m 和 n 。你可以假设 nums1 的空间大小等于 m + n，这样它就有足够的空间保存来自 nums2 的元素。
// 示例 1：
// 输入：nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// 输出：[1,2,2,3,5,6]
// 复制代码
// 示例2：
// 输入：nums1 = [1], m = 1, nums2 = [], n = 0
// 输出：[1]

// 作者：random__
// 链接：https://juejin.cn/post/6935774194076483614

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var mergeTwoSortArray = function(nums1, m, nums2, n) {
// 初始化两个指针的指向，初始化 nums1 尾部索引k
  let i = m - 1, j = n - 1, k = m + n - 1
  // 当两个数组都没遍历完时，指针同步移动
  while(i >= 0 && j >= 0) {
    // 取较大的值，从末尾往前填补
    if(nums1[i] >= nums2[j]) {
      nums1[k] = nums1[i] 
      i-- 
    } else {
      nums1[k] = nums2[j] 
      j-- 
    }
    k--
  }
  
  // nums2 留下的情况，特殊处理一下 
  while(j>=0) {
    nums1[k] = nums2[j]  
    k-- 
    j--
  }
};