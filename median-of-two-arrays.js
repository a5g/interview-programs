// https://leetcode.com/problems/median-of-two-sorted-arrays/

const findMedianSortedArrays = function (a, b) {
  const arr = a.concat(b).sort();

  let mid = parseInt(arr.length / 2, 10);
  let median = arr[mid];

  if (arr.length % 2 === 0) {
    median = (arr[mid - 1] + arr[mid]) / 2;
  }

  console.log(arr);
  return median.toFixed(5);
};

const a = [1, 2];
const b = [3, 4];

const median = findMedianSortedArrays(a, b);
console.log(`median: ${median}`);
