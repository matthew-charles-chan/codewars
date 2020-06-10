
function add(i) {
  let total = function (j) {
    return add(i + j)
  }
  
  total.valueOf = function () {
    return i
  }
  return total
}

console.log(add)