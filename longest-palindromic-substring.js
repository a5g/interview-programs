// https://leetcode.com/problems/longest-palindromic-substring/

const longestPalindrome = function (str) {
  if (str.length < 1 || str === null) return "";

  let longest = "";

  for (let i = 0; i < str.length; i++) {
    let oddPalindrome = expandFromCenter(str, i, i);
    let evenPalindrome = expandFromCenter(str, i - 1, i);

    if (oddPalindrome.length > longest.length) {
      longest = oddPalindrome;
    }

    if (evenPalindrome.length > longest.length) {
      longest = evenPalindrome;
    }
  }
  return longest;
};

const expandFromCenter = function (str, left, right) {
  let i = 0;
  while (str[left - i] && str[left - i] === str[right + i]) {
    i += 1;
  }

  i -= 1;

  return str.slice(left - i, right + i + 1);
};

const s = "babadmalayalam";
const res = longestPalindrome(s);
console.log(res);
