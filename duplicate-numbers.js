// method 1
function findDuplicates(arr) {
  let uniqueNumbers = new Set();
  let duplicateNumbers = new Set();

  for (let num of arr) {
    if (uniqueNumbers.has(num)) {
      duplicateNumbers.add(num);
    } else {
      uniqueNumbers.add(num);
    }
  }

  return Array.from(duplicateNumbers);
}

// Example usage:
let myArray = [1, 2, 3, 4, 2, 7, 8, 8, 9];
let duplicates = findDuplicates(myArray);
console.log("array: ", myArray);
console.log("Duplicate numbers: ", duplicates);

// method 2
function findDuplicates2(arr) {
  let duplicates = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }

  return duplicates;
}

// Example usage:
let myArray2 = [1, 2, 3, 4, 2, 7, 8, 8, 9];
let duplicates2 = findDuplicates2(myArray);
console.log("array: ", myArray2);
console.log("Duplicate numbers: ", duplicates);
