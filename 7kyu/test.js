/* eslint-disable func-style */
function createCheckDigit (membershipId) {
  const sumDigits = (num) => {
    let sum = 0
    parseInt(num)
    while (num > 0) {
      sum = sum + num % 10
      num = Math.floor(num / 10)
    }
    return sum
  }
  let checkDigit = sumDigits(membershipId)
  while (checkDigit.toString().length > 1) {
    checkDigit = sumDigits(checkDigit)
  }
  return checkDigit
}

console.log(createCheckDigit(555555555555))
