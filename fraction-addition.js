// https://leetcode.com/problems/fraction-addition-and-subtraction/

// class Solution {
//   public String fractionAddition(String expression) {
//     Scanner sc = new Scanner(expression).useDelimiter("/|(?=[+-])");
//     int A = 0;
//     int B = 1;

//     // Init: A / B = 0 / 1
//     // A / B + a / b = (Ab + aB) / Bb
//     // So, in each round, set A = Ab + aB, B = Bb.
//     while (sc.hasNext()) {
//       final int a = sc.nextInt();
//       final int b = sc.nextInt();
//       A = A * b + a * B;
//       B *= b;
//       final int g = gcd(A, B);
//       A /= g;
//       B /= g;
//     }

//     return A + "/" + B;
//   }

//   private int gcd(int a, int b) {
//     return a == 0 ? Math.abs(b) : gcd(b % a, a);
//   }
// }

function splitFractionExpression(expression) {
  // Split the expression using the regular expression for fractions
  const regex = /(-?\d+)\/(\d+)/g;
  const matches = expression.match(regex);

  if (!matches) {
    throw new Error("Invalid fraction expression");
  }

  // Convert matched parts to numbers
  const result = matches.flatMap((fraction) => {
    const [numerator, denominator] = fraction.split("/");
    return [parseInt(numerator, 10), parseInt(denominator, 10)];
  });

  return result;
}

function gcd(x, y) {
  return x % y == 0 ? y : gcd(y, x % y);
}

const fractionAddition = function (str) {
  const fracs = splitFractionExpression(str);
  // const matches = str.split("/|(?=[+-])");

  // if (!matches) {
  //   throw new Error("Invalid fraction expression");
  // }

  // const fracs = matches.flatMap((fraction) => {
  //   const [numerator, denominator] = fraction.split("/");
  //   return [parseInt(numerator, 10), parseInt(denominator, 10)];
  // });

  let i = 0;
  let A = 0;
  let B = 1;

  while (i < fracs.length) {
    let a = parseInt(fracs[i], 10);
    let b = parseInt(fracs[i + 1], 10);

    A = A * b + a * B;
    B *= b;

    let g = gcd(Math.abs(A), Math.abs(B));

    A /= g;
    B /= g;

    i += 2;
  }

  return `${A} / ${B}`;
};

const str = "-1/2+1/2";
const output = fractionAddition(str);
console.log(`str: `, str);
console.log(`output: `, output);

// // Example usage:
// const expression = "-1/2+1/2";
// const result = splitFractionExpression(expression);

// console.log(result); // Output: [-1, 2, 1, 2]

// working code
// // Function to calculate the Greatest Common Divisor (GCD) using Euclid's algorithm.
// function gcd(a, b) {
//   return b === 0 ? a : gcd(b, a % b);
// }

// // Function to add fractions from the string expression.
// function fractionAddition(expression) {
//   // Initialize a numerator and a common denominator, which is the LCM of 6, 7, 8, 9, 10.
//   let numerator = 0;
//   const commonDenominator = 6 * 7 * 8 * 9 * 10;

//   // Add '+' to the beginning if the expression starts with a number.
//   if (expression.charAt(0).match(/\d/)) {
//       expression = "+" + expression;
//   }

//   let i = 0;
//   const lengthOfExpression = expression.length;

//   // Iterate through the characters in the expression.
//   while (i < lengthOfExpression) {
//       // Determine the sign of the term (+1 or -1).
//       const sign = expression.charAt(i) === '-' ? -1 : 1;
//       i++; // Move past the sign for parsing the number.

//       // Determine the position of the next sign (or end of the string).
//       let j = i;
//       while (j < lengthOfExpression && expression.charAt(j) !== '+' && expression.charAt(j) !== '-') {
//           j++;
//       }

//       // Extract the fraction and split it into numerator and denominator.
//       const fraction = expression.substring(i, j);
//       const [currentNumerator, currentDenominator] = fraction.split("/").map(Number);

//       // Adjust the numerator according to the common denominator and the sign.
//       numerator += sign * (currentNumerator * commonDenominator) / currentDenominator;

//       // Move the index 'i' to the position of the next term's sign or the end of the string.
//       i = j;
//   }

//   // Simplify the fraction by dividing both the numerator and denominator by their GCD.
//   const greatestCommonDivisor = gcd(Math.abs(numerator), commonDenominator);
//   numerator /= greatestCommonDivisor;
//   const simplifiedCommonDenominator = commonDenominator / greatestCommonDivisor;

//   // Return the result in fraction format as a string.
//   return `${numerator}/${simplifiedCommonDenominator}`;
// }
