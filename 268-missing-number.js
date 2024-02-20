/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  nums.sort((a, b) => a - b);
  let n = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== n) {
      return i;
    }
    n++;
  }
  return nums.length;
};

/*
var missingNumber = function (nums) {

    return (nums.length * (nums.length +1)) / 2 - nums.reduce((x, y) => x + y, 0)

};
*/