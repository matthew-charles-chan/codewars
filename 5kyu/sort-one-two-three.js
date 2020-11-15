const sortByName = (arr) => {
  const ones = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
  const tens = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']

  const number = 999
  const numString = number.toString()
  const digits = numString.length
  let outString = ''
  if (digits > 2) {
    outString += `${ones[Number(numString[0]) - 1]} hundred`
  }
  if (digits > 1) {
    outString += ` ${tens[Number(numString[1]) - 1]}`
  }
  return outString
}

const numsArr = [[8, 8, 9, 9, 10, 10], [1, 2, 3, 4], [9, 99, 999]]

for (const nums of numsArr) {
  console.log(sortByName(nums))
}
