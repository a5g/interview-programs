// https://leetcode.com/problems/product-of-array-except-self/

const productExceptSelf = function (nums) {
  const left = new Array(nums.length).fill(0);
  left[0] = 1;
  const right = new Array(nums.length).fill(0);
  right[right.length - 1] = 1;
  const res = [];

  for (let i = 1; i < nums.length; i += 1) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  for (let i = right.length - 2; i >= 0; i -= 1) {
    right[i] = nums[i + 1] * right[i + 1];
  }

  for (let i = 0; i < nums.length; i++) {
    res[i] = left[i] * right[i];
  }

  return res;
};

const nums = [1, 2, 3, 4];
const output = productExceptSelf(nums);

console.log(`nums: `, nums);
console.log(`output: `, output);
