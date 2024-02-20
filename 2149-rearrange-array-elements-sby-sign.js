/**
 * @param {number[]} nums
 * @return {number[]}
 */
var rearrangeArray = function (nums) {
  let res = new Array(nums.length).fill(0),
    p = 0,
    n = 1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      res[p] = nums[i];
      p += 2;
    } else {
      res[n] = nums[i];
      n += 2;
    }
  }
  return res;
};
