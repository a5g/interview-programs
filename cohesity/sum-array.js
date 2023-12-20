function findLargestSubarrayWithZeroSum(arr) {
  let sumMap = {};
  let maxLen = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (arr[i] === 0 && maxLen === 0) {
      maxLen = 1;
    }

    if (sum === 0) {
      maxLen = i + 1;
    }

    if (sumMap.hasOwnProperty(sum)) {
      maxLen = Math.max(maxLen, i - sumMap[sum]);
    } else {
      sumMap[sum] = i;
    }
  }

  if (maxLen === 0) {
    return "No subarray found";
  }

  const startIndex = sumMap[sum - maxLen];
  const subarray = arr.slice(startIndex + 1, startIndex + 1 + maxLen);

  return subarray;
}

// Example usage:
const array = [15, -2, 2, -8, 1, 7, 10, 23];
const result = findLargestSubarrayWithZeroSum(array);
console.log(result);
