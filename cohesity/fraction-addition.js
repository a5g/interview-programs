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

  let i = 0;
  let A = 0;
  let B = 1;

  while (i < fracs.length) {
    let a = fracs[i];
    let b = fracs[i + 1];

    A = A * b + a * B;
    B *= b;

    let g = gcd(Math.abs(A), Math.abs(B));

    A /= g;
    B /= g;

    i += 2;
  }

  return `${A}/${B}`;
};

const str = "-1/2+1/2";
const output = fractionAddition(str);
console.log(`str: `, str);
console.log(`output: `, output);
