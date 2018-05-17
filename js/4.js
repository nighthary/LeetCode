/**
 *  给定两个大小为 m 和 n 的有序数组 nums1 和 nums2 。

    请找出这两个有序数组的中位数。要求算法的时间复杂度为 O(log (m+n)) 。

    示例 1:

    nums1 = [1, 3]
    nums2 = [2]

    中位数是 2.0
    示例 2:

    nums1 = [1, 2]
    nums2 = [3, 4]

    中位数是 (2 + 3)/2 = 2.5
 */


 /**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const len1 = nums1.length, len2 = nums2.length;
    const newNums = nums1.concat(nums2);
    let result = 0;

    newNums.sort((a, b) => a - b);

    const mid = (len1 + len2) / 2,
      divide = (len1 + len2) % 2;
    
    // 如果长度和是偶数
    if(divide === 0){
      result = ((newNums[mid - 1] + newNums[mid]) / 2).toFixed(1);
    } else {
      result = newNums[Math.floor(mid)].toFixed(1);
    }

    return Number(result);
};


const now = Date.now();
console.log(findMedianSortedArrays([1,3,5,6,7,8,9,12,20,123], [2,4,6,8,10,22,34,156,235,287]));
console.log(Date.now() - now);