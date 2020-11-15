const uniqueInOrder = (iterable) => {
  const output = []
  let last
  // const output = iterable[0]? [iterable[0]]: []
  for (let i = 1; i < iterable.length; i++) {
    if (iterable[i] !== last) {
      output.push(last = iterable[i])
    }
  }
  return output
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'))
console.log(uniqueInOrder([1, 2, 2, 3, 3]))
