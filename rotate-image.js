// https://leetcode.com/problems/rotate-image/

const rotate = function (matrix) {
  for (let r = 0; r < matrix.length; r += 1) {
    for (let c = r; c < matrix[0].length; c += 1) {
      [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
    }
  }

  for (let row of matrix) {
    row.reverse();
  }

  return matrix;
};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
const res = rotate(matrix);

console.log(`matrix: `, matrix);
console.log(`res: `, res);
