
function add (i) {
  const total = function (j) {
    return add(i + j)
  }

  total.valueOf = function () {
    return i
  }
  return total
}

console.log(add(2)(3)(4))
