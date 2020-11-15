const highestRank = (arr) => {
  const countObj = {}
  arr.map(num => {
    countObj[num] ? countObj[num]++ : countObj[num] = 1
  })
  let maxCount = 0
  let highestRank = 0

  for (const num in countObj) {
    if (countObj[num] >= maxCount) {
      maxCount = countObj[num]
      if (Number(num) > highestRank) {
        highestRank = Number(num)
      }
    }
  }
  return highestRank
}

const arr = [12, 10, 8, 12, 7, 6, 4, 10, 12]

highestRank(arr)
