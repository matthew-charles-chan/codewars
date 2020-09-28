const rolldiceSumProb = (arr, totalSides) => {
  // let prob;
  const den = Math.pow(6, totalSides);
  console.log(den);
  const min = totalSides;
  const max = 6 * totalSides;
  let tmax = max;
  let count = 1;
  const map = {};
  for (let i = min; i < tmax; i ++) {
    map[i] = count;
    map[max + totalSides - i] = count;
    count ++;
    tmax --;

  }
  console.log(map);
  const factorial = (n) => {
    if (n === 0) {
      return 1;
    } else {
      return (n * factorial(n - 1));
    }
  };
  // console.log(factorial(3));
  // your code here
  return 6 * map[arr] / den;
};

console.log(rolldiceSumProb(8, 3));