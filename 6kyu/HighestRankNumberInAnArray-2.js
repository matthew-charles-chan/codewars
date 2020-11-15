const highestRank = (arr) => {
  const counts = {}
  arr.forEach((n) => {
    if (!counts[n]) {
      counts[n] = 1
    } else {
      counts[n]++
    }
  })

  let highestRank = 0
  let maxRepeat = 0
  for (const num in counts) {
    if (counts[num] >= maxRepeat) {
      maxRepeat = counts[num]
      if (Number(num) > Number(highestRank)) {
        highestRank = Number(num)
      }
    }
  }
  return highestRank
}

const testArr = [12, 10, 8, 12, 7, 10, 10, 6, 4, 10, 12]
console.log(highestRank(testArr))
