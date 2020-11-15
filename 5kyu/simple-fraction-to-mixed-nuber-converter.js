// const gcd = function(a, b) {
//   console.log(a,b);
//   if (!b) return a;

//   return gcd(b, a % b);
// };
const gcd = (a, b) => {
  for (let i = 2; i < 10000; i++) {
    if (a % i === 0 && b % i === 0) {
      return i
    }
  }
}
const mixedFraction = (s) => {
  const [inputNumerator, inputDenominator] = s.split('/').map((numString) => Number(numString))
  const intiger = inputNumerator / inputDenominator
  const whole = Math.floor(intiger)
  const decimal = intiger - whole
  // console.log(whole, decimal);
  if (decimal === 0) {
    return whole.toString()
  }
  const ouputDenominator = gcd(inputNumerator, inputDenominator)
  console.log(ouputDenominator)
  return `${whole} ${Math.round(ouputDenominator * decimal)}/${ouputDenominator}`
}
// console.log(4 % 6);
// console.log(4 % 4);

console.log(gcd(42, 9))
// console.log(mixedFraction('42/9'));
// console.log(mixedFraction('6/3'));
// console.log(mixedFraction('1/1'));
// console.log(mixedFraction('11/11'));
console.log(mixedFraction('4/6'))
// console.log(mixedFraction('0/18891'));
// console.log(mixedFraction('-10/7'));
// console.log(mixedFraction('-22/-7'));
