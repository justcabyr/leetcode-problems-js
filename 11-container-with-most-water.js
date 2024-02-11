/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let i = 0,
    j = height.length - 1,
    area = 0;
  while (i < j) {
    let temp = (j - i) * Math.min(height[i], height[j]);
    area = Math.max(area, temp);
    height[i] < height[j] ? i++ : j--;
  }
  return area;
};
