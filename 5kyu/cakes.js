const cakes = (recipe, available) => {
  const maxCakes = []
  for (const ingridient in recipe) {
    const ingMax = Math.floor(available[ingridient] / recipe[ingridient])
    if (!ingMax || ingMax < 1) {
      return 0
    } else {
      maxCakes.push(ingMax)
    }
  }
  return Math.min(...maxCakes)
}

console.log(cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }))
console.log(cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 }))
