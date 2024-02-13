/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
  let i = 0,
    j = nums.length - 1,
    count = 0;
  let sortedNums = nums.sort(function (a, b) {
    return a - b;
  });
  while (j > i) {
    if (sortedNums[i] + sortedNums[j] == k) {
      i++;
      j--;
      count++;
    } else if (sortedNums[i] + sortedNums[j] > k) {
      j--;
    } else {
      i++;
    }
  }
  return count;
};
