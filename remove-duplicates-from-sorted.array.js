const removeDuplicates = function (array) {
  let arr = [...array];
  if (arr.length <= 1) {
    return arr;
  }

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] == arr[i - 1]) {
      arr.splice(i, 1);

      i -= 1;
    }
  }

  return arr;
};

const arr = [1, 2, 2, 3, 4, 4, 4, 4, 5];
const uniqueArray = removeDuplicates(arr);
console.log(`arr: ${JSON.stringify(arr)}`);
console.log(`unique arr: ${JSON.stringify(uniqueArray)}`);
