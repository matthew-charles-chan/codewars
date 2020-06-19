
// const parse = (arr, start, end) => {
//   const output = [];
//   // output = [...output, ...arr.slice()]
//   for (let i = start; i <= end; i ++) {
//     output.push(arr[start][i]);
//   }

//   if (start === end) {
//     return output;
//   }
//   for (let i = start + 1; i <= end; i ++) {
//     output.push(arr[i][end]);
//   }
//   for (let i = end - 1; i >= start; i --) {
//     output.push(arr[end][i]);
//   }
//   for (let i = end - 1; i > start; i --) {
//     output.push(arr[i][start]);
//   }
//   if (start + 1 === end) {
//     return output;
//   }

//   return output.concat(parse(arr, start + 1, end - 1));
// };

// const snail = (arr) => {
//   if (arr[0].length === 0)  return [];
//   return parse(arr, 0, arr.length - 1);
// }

const snail = (arr) => {
  // if (arr[0].length === 0)  return [];
  // return parse(arr, 0, arr.length - 1);
  let result;
  while (arr.length) {
    result = (result ? result.concat(arr.shift()) : arr.shift());

    for (let i = 0; i < arr.length; i ++) {
      result.push(arr[i].pop());
    }

    result = result.concat((arr.pop() || []).reverse());

    for (let i = arr.length - 1; i >= 0; i --) {
      result.push(arr[i].shift());
    }
  }
  return result;

};

const testArr = [
  [1,2,3],
  [8,9,4],
  [7,6,5]
];
const testArr2 = [
  [1, 2, 3, 4, 5, 6],
  [20, 21, 22, 23, 24, 7],
  [19, 32, 33, 34, 25, 8],
  [18, 31, 36, 35, 26, 9],
  [17, 30, 29, 28, 27, 10],
  [16, 15, 14, 13, 12, 11]
];

const testArr3 = [
  [1,2],
  [4,3]
];
// console.log(snail(testArr) === [1,2,3,4,5,6,7,8,9]);
console.log(snail(testArr));
console.log(snail(testArr2));
// console.log(snail(testArr3));
         