// The "Candy" problem on LeetCode involves distributing candies to a group of children, where each child must receive at least one candy, and children with a higher rating should receive more candies than their neighbors. The goal is to minimize the total number of candies used.

/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  const n = ratings.length;
  const candies = new Array(n).fill(1); // Initialize with 1 candy for each child

  // Scan from left to right
  for (let i = 1; i < n; i++) {
    if (ratings[i] > ratings[i - 1]) {
      candies[i] = candies[i - 1] + 1;
    }
  }

  // Scan from right to left and ensure that higher-rated children have more candies
  for (let i = n - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      candies[i] = Math.max(candies[i], candies[i + 1] + 1);
    }
  }

  // Sum up the total number of candies
  return candies.reduce((total, num) => total + num, 0);
};

// Example usage:
const ratings = [1, 0, 2];
console.log(candy(ratings)); // Output: 5
