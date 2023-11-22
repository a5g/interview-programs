// https://leetcode.com/problems/two-sum/

const twoSum = function (nums, target) {
  const comp = {};

  for (let i = 0; i < nums.length; i += 1) {
    if (comp[nums[i]] >= 0) {
      return [comp[nums[i]], i];
    }

    comp[target - nums[i]] = i;
    console.log(1);
  }

  return null;
};

const nums = [11, 2, 5, 6];
const target = 9;

const d = twoSum(nums, target);
console.log(d);
