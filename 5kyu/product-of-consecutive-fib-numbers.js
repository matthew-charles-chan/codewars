const productFib = (prod) => {
  let lower = 1;
  let higher = 2;
  let test = false;
  
  do {
    let tempLow = lower;
    lower = higher;
    higher = higher + tempLow;
  }
  while (lower * higher < prod);
  
  if (lower * higher === prod) {
    test = true;
  }
  return [lower, higher, test];
  
};

const products = [3, 4895, 5895, 74049690, 84049890];

for (const product of products) {
  console.log(productFib(product));
}
