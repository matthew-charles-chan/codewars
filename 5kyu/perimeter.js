const perimeter = (n) => {
  const array = []
  for (let i = 0; i < n + 1; i++) {
    if (i < 2) {
      array.push(1)
    } else {
      array.push(array[i - 2] + array[i - 1])
    }
  }
  return 4 * array.reduce((a, b) => a + b, 0)
}

console.log(perimeter(0), 4)
console.log(perimeter(5), 80)
console.log(perimeter(20), 114624)
