/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function (nums) {
  const frequency = new Map();
  for (const num of nums) {
    frequency.set(num, (frequency.get(num) || 0) + 1);
  }

  const result = [];
  for (const [num, count] of frequency) {
    if (count === 1) {
      result.push(num);
    }
  }
  return result;
};
