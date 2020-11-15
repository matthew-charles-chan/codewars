const numberToPrice = (number) => {
  if (typeof number !== 'number') {
    return 'NaN'
  }
  const numStr = number.toLocaleString()
  const [whole, decimal] = numStr.split('.')

  let trunkatedDecimal = ''

  if (decimal) {
    for (let i = 0; i < 2; i++) {
      decimal[i] ? trunkatedDecimal += decimal[i] : trunkatedDecimal += '0'
    }
  } else {
    trunkatedDecimal = '00'
  }

  const price = whole + '.' + trunkatedDecimal
  return price
}
console.log(numberToPrice(1500.129))
console.log(numberToPrice(-5))
console.log(numberToPrice(1000000.5))
