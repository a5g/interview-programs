let a = [1, 2, 4, 5, 5, 9, 55, 90];
let b = [5, 40, 50, 60];

// approach one
const mergeArrays1 = (arr1, arr2) => {
  console.log(`arr1: ${JSON.stringify(arr1)}`);
  console.log(`arr2: ${JSON.stringify(arr2)}`);

  let i = 0;
  let j = 0;
  let result = [];

  while (result.length < arr1.length + arr2.length) {
    if (arr1[i] === arr2[i]) {
      result[result.length] = arr1[i];
      result[result.length] = arr2[j];

      i++;
      j++;
    } else {
      if (arr1[i] < arr2[j]) {
        result[result.length] = arr1[i];
        i++;
      } else {
        result[result.length] = arr2[j];
        j++;
      }
    }

    if (i === arr1.length) {
      for (; j < arr2.length; j++) {
        result[result.length] = arr2[j];
      }
    }

    if (j === arr2.length) {
      for (; i < arr1.length; i++) {
        result[result.length] = arr1[i];
      }
    }
  }

  return result;
};

// approach two
const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
};

const bubbleSort = (arr) => {
  let len = arr.length,
    i,
    j,
    stop;

  for (i = 0; i < len; i++) {
    for (j = 0; j < len - i; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }

  return arr;
};

const mergeArrays2 = (arr1, arr2) => {
  console.log(`arr1: ${JSON.stringify(arr1)}`);
  console.log(`arr2: ${JSON.stringify(arr2)}`);

  let arr3 = arr1.concat(arr2);
  console.log(`arr3: ${JSON.stringify(bubbleSort(arr3))}`);
};

// approach 3
const mergeArrays3 = (arr1, arr2) => {
  return arr1.concat(arr2).sort();
};

const mergedArray = mergeArrays3(a, b);
console.log(`result : ${JSON.stringify(mergedArray)}`);
