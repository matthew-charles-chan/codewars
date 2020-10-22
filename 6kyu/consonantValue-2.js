
const solve  = (str) => {
  const subStrs = str.split(/[a,e,i,o,u]/);
  let max = 0;
  subStrs.forEach(subStr => {
    console.log(subStr);
    let subStrVal = 0;
    for (const cons of subStr) {
      subStrVal += Number(subStr.charCodeAt(cons)) - 96;
    }
    if (subStrVal > max) {
      max = subStrVal;
    }
  });
  return max;
};

console.log(solve('zodiacs'));