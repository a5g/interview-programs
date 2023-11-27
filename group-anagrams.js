// https://leetcode.com/problems/group-anagrams/description/

const groupAnagrams = function (arr) {
  const sortedKeys = arr.map((word) => word.split("").sort().join(""));
  const anagrams = {};

  arr.forEach((item, index) => {
    const key = sortedKeys[index];
    if (anagrams[key] === undefined) {
      anagrams[key] = [item];
    } else {
      anagrams[key].push(item);
    }
  });

  const garr = [];
  Object.keys(anagrams).forEach((key) => {
    garr.push(anagrams[key]);
  });

  return garr;
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
const output = groupAnagrams(strs);

console.log(`strs: `, strs);
console.log(`output: `, output);
