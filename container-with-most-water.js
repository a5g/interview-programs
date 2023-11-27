// https://leetcode.com/problems/container-with-most-water/

const maxArea = function (height) {
  // const { length } = height;
  let lower = 0;
  let upper = height.length - 1;

  let max = 0;

  while (upper > lower) {
    const x = upper - lower;
    const y = height[height[lower] < height[upper] ? lower++ : upper--];

    const res = x * y;

    max = Math.max(max, res);
  }

  return max;
};
const arr = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const area = maxArea(arr);
console.log(`arr: `, arr);
console.log(`maxarea: `, area);
