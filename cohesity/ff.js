function splitExpression(expression) {
  const regex = /(-?\d+)\/(\d+)/g;
  const matches = expression.match(regex);

  if (!matches) {
    throw new Error("Invalid fraction expression");
  }

  const result = matches.flatMap((fraction) => {
    const [numerator, denominator] = fraction.split("/");
    return [parseInt(numerator, 10), parseInt(denominator, 10)];
  });

  return result;
}

function gcd(x, y) {
  return x % y === 0 ? y : gcd(y, x % y);
}

function fractionAddition(expression) {
  // split such that we get the array of numbers (signed)
  const fraction = splitExpression(expression);

  let A = 0;
  let B = 1;
  let i = 0;

  while (i < fraction.length) {
    const a = fraction[i];
    const b = fraction[i + 1];

    A = A * b + a * B;
    B *= b;

    const g = gcd(Math.abs(A), Math.abs(B));
    A /= g;
    B /= g;

    i += 2;
  }

  return `${A}/${B}`;
}

const expression = "-1/2+1/2";
const output = fractionAddition(expression);
console.log(`expression: `, expression);
console.log(`output: `, output);
