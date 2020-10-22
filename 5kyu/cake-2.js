const cakes = (recipe, available) => {
  let quantity;
  for (const ing in recipe) {
    const ingQuantity = Math.floor(available[ing] / recipe[ing]);
    if (!quantity || quantity > ingQuantity) {
      quantity = ingQuantity;
    }
  }
  return quantity;
};


const recipe = {flour: 500, sugar: 200, eggs: 1};
const available = {flour: 1200, sugar: 1200, eggs: 5, milk: 200};
console.log(cakes(recipe, available));