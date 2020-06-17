const iqTest = (numbers) => {
  const numArr = numbers.split(' ').map(n => Number(n))
  let target;
  const evenArr = [];
  const oddArr = [];

  for (const num of numArr) {
    num % 2 === 0 ?
      evenArr.push(num) :
      oddArr.push(num);
  }

  evenArr.length === 1 ?
    target = evenArr[0] :
    target = oddArr[0];

  return numArr.indexOf(target);
}

console.log(iqTest('2 4 7 8 10'))
console.log(iqTest("1 2 1 1"))