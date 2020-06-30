// const powerSumDigitTerm = (n) => {
//   let curr = 80;
//   const powerSumDigits = [];
//   while (powerSumDigits.length < n) {
//     let digitsSum = curr
//       .toString()
//       .split('')
//       .reduce((a, b) => parseInt(a) + parseInt(b), 0);
//     if (digitsSum === 1 || curr % 2 !== 0 && digitsSum % 2 === 0) {
//       curr ++;
//     } else {
//       let currExp = 2;
//       let power = Math.pow(digitsSum, currExp);
//       while (power <= curr) {
//         if (power === curr) {
//           powerSumDigits.push(power);
//         }
//         currExp ++;
//         power = Math.pow(digitsSum, currExp);
//       }
//       curr ++;
//     }
//   }
//   return powerSumDigits[n - 1];
// };

// const powerSumDigitMap = (n) => {
//   let curr = 80;
//   const powerSumMap = {};
//   while (Object.keys(powerSumMap).length < n) {
//     let digitsSum = curr
//       .toString()
//       .split('')
//       .reduce((a, b) => parseInt(a) + parseInt(b), 0);
//     if (curr % digitsSum !== 0) {
//       curr ++;
//     } else {
//       let currExp = Math.round(Math.log(curr) / Math.log(digitsSum));
//       let power = Math.pow(digitsSum, currExp);
//       if (power === curr) {
//         powerSumMap[Object.keys(powerSumMap).length + 1] = power;
//         console.log(powerSumMap);
//         curr += 100;
//       } else {

//         curr ++;
//       }
//     }
//   }
//   return powerSumMap;
// };

// const powerSumDigitArray = (n) => {
//   let curr = 10;
//   const powerSumArr = [];
//   while (!powerSumArr[n - 1]) {
//     let digitsSum = 0;
//     let value = curr;
//     while (value) {
//       digitsSum += value % 10;
//       value = Math.floor(value / 10);
//     }
//     if (curr % digitsSum !== 0 || digitsSum === 1) {
//       curr ++;
//     } else {
//       let currExp = Math.round((Math.log(curr) / Math.log(digitsSum)) * 100000000) / 100000000;
//       if (Number.isInteger(currExp)) {
//         powerSumArr.push(curr);
//         console.log(powerSumArr);
//       }
//       curr ++;
//     }
//   }
//   return powerSumArr;
// };

let series = [0];
for (let a = 2; a < 100; a++) {
  for (let b = 2; b < 42; b++) {
    let c = Math.pow(a, b);
    if (c.toString().split('').reduce((x,y) => x + parseInt(y), 0) === a) {
      series.push(c);
    }
  }
}
// series = series.sort((a, b) => a - b);
console.log(series);
// console.log(powerSumDigitTerm(1));
