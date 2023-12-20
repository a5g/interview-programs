// https://www.geeksforgeeks.org/minimum-number-platforms-required-railwaybus-station/

// const platformsNeeded = function (arr, dep) {
//   let max = 0;
//   let pf = 1;

//   for (let i = 1; i < arr.length; i += 1) {
//     if (arr[i] <= dep[i - 0]) {
//       pf += 1;
//     } else {
//       pf -= 1;
//     }
//     max = Math.max(max, pf);
//   }

//   return max;
// };

// function platformsNeeded(arr, dep, n) {
//   // plat_needed indicates number of platforms
//   // needed at a time
//   var plat_needed = 1,
//     result = 1;

//   // run a nested loop to find overlap
//   for (var i = 1; i < n; i++) {
//     // minimum platform
//     plat_needed = 1;

//     for (var j = 0; j < n; j++) {
//       // check for overlap
//       if (i != j) if (arr[i] >= arr[j] && dep[j] >= arr[i]) plat_needed++;
//     }

//     // update result
//     result = max(result, plat_needed);
//   }

//   return result;
// }

function platformsNeeded(arr, dep) {
  // Sort arrival and
  // departure arrays
  arr = arr.sort((a, b) => a - b);
  dep = dep.sort((a, b) => a - b);

  // plat_needed indicates
  // number of platforms
  // needed at a time
  let plat_needed = 1;
  let result = 1;
  let i = 1;
  let j = 0;

  // Similar to merge in
  // merge sort to process
  // all events in sorted order
  while (i < arr.length && j < dep.length) {
    // If next event in sorted
    // order is arrival, increment
    // count of platforms needed
    if (arr[i] <= dep[j]) {
      plat_needed++;
      i++;
    }

    // Else decrement count
    // of platforms needed
    else {
      plat_needed--;
      j++;
    }

    // Update result if needed
    if (plat_needed > result) result = plat_needed;
  }

  return result;
}

const arr = [900, 940, 950, 1100, 1500, 1800];
const dep = [910, 1120, 1130, 1200, 1900, 2000];

const output = platformsNeeded(arr, dep);
console.log(`platform needed: `, output);
// Output: 3
// Explanation: There are at-most three trains at a time (time between 9:40 to 12:00)

// Input:
// const arr = [9:00, 9:40], dep[] = [9:10, 12:00]
// Output: 1
// Explanation: Only one platform is needed.
