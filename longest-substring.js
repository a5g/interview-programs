// Longest Substring Without Repeating Characters in Javascript

function lengthOfLongestSubstring(s) {
  let n = s.length;
  let longestSubstring = 0;
  let charIndexMap = {};

  for (let i = 0, j = 0; j < n; j++) {
    if (charIndexMap[s[j]] !== undefined) {
      // Move the left pointer to the right of the previous occurrence
      i = Math.max(charIndexMap[s[j]] + 1, i);
    }

    // Update the character's last seen index
    charIndexMap[s[j]] = j;

    // Update the length of the longest substring
    longestSubstring = Math.max(longestSubstring, j - i + 1);
  }

  return longestSubstring;
}

// Example usage:
let inputString = "abcabcbb";
let result = lengthOfLongestSubstring(inputString);
console.log(result); // Output: 3
