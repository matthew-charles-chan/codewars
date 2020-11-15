const findChildren = (dancingBrigade) => {
  const parents = dancingBrigade.match(/([A-Z])/g).sort()
  const children = dancingBrigade.match(/([a-z])/g)
  const output = parents

  for (const child of children) {
    const parentIndex = output.indexOf(child.toUpperCase())
    output.splice(parentIndex + 1, 0, child)
  }

  return output.join('')
}

console.log(findChildren('beeeEBb'))
