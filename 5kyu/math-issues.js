
round = function (number) {
  const digits = number.toString().split('.')
  const decimal = Number('.' + digits[1])
  if (decimal >= 0.5) {
    digits[0]++
  }
  return Number(digits[0])
}

ceil = function (number) {
  const digits = number.toString().split('.')
  const decimal = Number('.' + digits[1])
  if (decimal >= 0) {
    digits[0]++
  }
  return Number(digits[0])
}

floor = function (number) {
  const digits = number.toString().split('.').map(n => Number(n))
  return digits[0]
}

console.log(round(0.53477))
console.log(floor(0))
console.log(floor(1.2))
