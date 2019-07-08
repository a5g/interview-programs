let a = [1, 2, 4, 5, 5, 9, 55, 90];
let b = [5, 40, 50, 60];

const mergeArrays = (array1, array2) => {
  console.log(`array1: ${JSON.stringify(array1)}`);
  console.log(`array2: ${JSON.stringify(array2)}`);

  let i = 0;
  let j = 0;
  let result = [];

  while (result.length < array1.length + array2.length) {
    if (array1[i] === array2[i]) {
      result[result.length] = array1[i];
      result[result.length] = array2[j];

      i++;
      j++;
    } else {
      if (array1[i] < array2[j]) {
        result[result.length] = array1[i];
        i++;
      } else {
        result[result.length] = array2[j];
        j++;
      }
    }

    if (i === array1.length) {
      for (; j < array2.length; j++) {
        result[result.length] = array2[j];
      }
    }

    if (j === array2.length) {
      for (; i < array1.length; i++) {
        result[result.length] = array1[i];
      }
    }
  }

  return result;
};

const mergedArray = mergeArrays(a, b);
console.log(`result : ${JSON.stringify(mergedArray)}`);
