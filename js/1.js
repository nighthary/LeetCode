/**
 *  给定一个整数数组和一个目标值，找出数组中和为目标值的两个数。

    你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。

    示例:

    给定 nums = [2, 7, 11, 15], target = 9

    因为 nums[0] + nums[1] = 2 + 7 = 9
    所以返回 [0, 1]
 */

/**
 * 思路：遍历到一个值时用对象保存这个值（作为对象的key）及其index(作为对象的value)，并判断余数（target减去当前值）是否在对象中
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function(nums, target) {
    if(!nums.length) return [];
    let result = [], tmp = {};
    nums.map((v, i) => {
      const remainder = target - v;
      if(tmp[remainder] !== undefined && !result.length){
        result = [tmp[remainder], i];
      } else{
        tmp[v] = i;
      }
    });
    return result;
};

console.log(twoSum([8, 3, 7, 6, 15], 9))