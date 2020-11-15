const cakes = (recipe, available) => {
  let quantity
  for (const ing in recipe) {
    if (!available[ing]) {
      return 0
    } else {
      const ingQuantity = Math.floor(available[ing] / recipe[ing])
      if (!quantity || quantity > ingQuantity) {
        quantity = ingQuantity
      }
    }
  }
  return quantity
}

const recipe = { flour: 500, sugar: 200, eggs: 1 }
const available = { flour: 1200, sugar: 1200, eggs: 5, milk: 200 }
console.log(cakes(recipe, available))

const recipe2 = { apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }
const available2 = { sugar: 500, flour: 2000, milk: 2000 }
console.log(cakes(recipe2, available2))
