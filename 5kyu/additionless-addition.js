const add = function(x, y) {
  // if (y === 0) {
  //   return x;
  // } else {
  //   return add(x ^ y, (x & y) << 1);
  // }
  while (y !== 0) {
    // Logical AND
    // ex 1 + 3
    // 001
    // 011
    // ___
    // 001 (1)
    const carryDigit = x & y;

    // Logical XOR
    // 001
    // 011
    // ___
    // 010 (2)

    x = x ^ y;

    // move carryDigit to the left
    // 001
    // ___
    // 010 (2)
    y = carryDigit << 1;
  }
  return x;
};

console.log(add(3, 1));