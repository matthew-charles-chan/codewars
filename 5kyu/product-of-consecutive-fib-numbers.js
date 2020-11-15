const productFib = (prod) => {
  let n = 0
  let nPlus = 1

  while (n * nPlus < prod) {
    nPlus = n + nPlus
    n = nPlus - n
  }

  return [n, nPlus, n * nPlus === prod]
}

const products = [3, 4895, 5895, 74049690, 84049890]

for (const product of products) {
  console.log(productFib(product))
}
