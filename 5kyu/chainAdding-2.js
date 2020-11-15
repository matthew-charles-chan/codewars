/* eslint-disable func-style */
// We want to create a function that will add numbers together when called in succession.

// add(1)(2);
// => returns 3
// We also want to be able to continue to add numbers to our chain.

// add(1)(2)(3); // 6
// add(1)(2)(3)(4); // 10
// add(1)(2)(3)(4)(5); // 15

// const add = (i) => {
//   let total = (j) => {
//     console.log(j);
//     // return add(i + j);
//   };

// };
function add (a) {
  const total = function (b) {
    return add(a + b)
  }
  console.log(total)
  total.valueOf = function () {
    return a
  }
  return total
}

console.log(

  add(2)
)
