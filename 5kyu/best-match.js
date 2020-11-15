const bestMatch = (aGoals, bGoals) => {
  const goalDiffs = []
  for (let i = 0; i < aGoals.length; i++) {
    goalDiffs.push(aGoals[i] - bGoals[i])
  }

  const minDiff = Math.min(...goalDiffs)

  const closeGames = []
  for (let i = 0; i < goalDiffs.length; i++) {
    goalDiffs[i] === minDiff
      ? closeGames.push(bGoals[i])
      : closeGames.push(-1)
  }
  return (closeGames.indexOf(Math.max(...closeGames)))
}

// console.log(bestMatch([6, 4],[1, 2]));

// console.log(bestMatch([1],[0]));

// console.log(bestMatch([1, 2, 3, 4, 5],[0, 1, 2, 3, 4]));

// console.log(bestMatch([3, 4, 3],[1, 1, 2]));

// console.log(bestMatch([4, 3, 4],[1, 1, 1]));
