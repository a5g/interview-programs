// https://leetcode.com/problems/compare-version-numbers/

const compareVersion = function (version1, version2) {
  const s1 = version1.split(".");
  const s2 = version2.split(".");
  const maxLength = Math.max(s1.length, s2.length);

  for (let i = 0; i < maxLength; i += 1) {
    let v1 = i < s1.length ? parseInt(s1[i], 10) : 0;
    let v2 = i < s2.length ? parseInt(s2[i], 10) : 0;

    if (v1 > v2) return 1;
    else if (v1 < v2) return -1;
  }

  return 0;
};

let v1 = "1.01";
let v2 = "1.001";
let output = compareVersion(v1, v2);
console.log(`v1: `, v1);
console.log(`v2: `, v2);
console.log(`output: `, output);
console.log(`-------------------`);

v1 = "1.0";
v2 = "1.0.0";
output = compareVersion(v1, v2);
console.log(`v1: `, v1);
console.log(`v2: `, v2);
console.log(`output: `, output);
console.log(`-------------------`);

v1 = "0.1";
v2 = "1.1";
output = compareVersion(v1, v2);
console.log(`v1: `, v1);
console.log(`v2: `, v2);
console.log(`output: `, output);
console.log(`-------------------`);
