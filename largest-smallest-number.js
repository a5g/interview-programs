function findMax(arr) {
  let max = arr[0];
  arr.forEach((item) => {
    if (item > max) {
      max = item;
    }
  });

  return max;
}

function findMin(arr) {
  let min = arr[0];
  arr.forEach((item) => {
    if (item < min) {
      min = item;
    }
  });

  return min;
}

const arr = [99, 125, 10, 5, 26, 85, 365, 49, 58];
const max = findMax(arr);
const min = findMin(arr);
console.log(`arr: ${JSON.stringify(arr)}`);
console.log(`max: ${max}`);
console.log(`min: ${min}`);
