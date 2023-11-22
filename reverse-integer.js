// https://leetcode.com/problems/reverse-integer/

const reverse = function (num) {
  let rev = 0;
  let pop = 0;
  let bit = Math.pow(2, 31) - 1;

  while (num != 0) {
    pop = num % 10;
    num = parseInt(num / 10, 10);

    rev = rev * 10 + pop;
  }

  if (rev > bit || rev < -bit) {
    return 0;
  }

  return rev;
};

const n = 1534236469;
const res = reverse(n);

console.log(`number: ${n}`);
console.log(`rev number: ${res}`);
