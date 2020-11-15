const list = (names) => {
  // let namesArr = [];
  let namesStr = ''
  if (names.length === 1) {
    namesStr = names[0].name
  } else {
    for (let i = 0; i < names.length; i++) {
      if (i > names.length - 2) {
        namesStr += names[i].name
      } else {
        namesStr += names[i].name
        i > names.length - 3
          ? namesStr += ' & '
          : namesStr += ', '
      }
    }
  }
  return namesStr
}

function betterList (names) {
  const xs = names.map(p => p.name)
  const x = xs.pop()
  return xs.length ? xs.join(', ') + ' & ' + x : x || ''
}

console.log(list([{ name: 'Bart' }, { name: 'Lisa' }, { name: 'Maggie' }]))
