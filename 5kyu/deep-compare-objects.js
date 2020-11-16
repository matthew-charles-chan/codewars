const deepCompare = (a, b) => {
  if (a === undefined || a === null) {
    return a === b
  }

  const aKeys = Object.keys(a)
  const bKeys = Object.keys(b)

  // test that same number of keys
  if (aKeys.length !== bKeys.length) {
    return false
  }

  // test if value is not obj, array
  // test that keys are equal
  for (const key of aKeys) {
    if (a[key] === undefined || a[key] === null) {
      if (a[key] !== b[key]) {
        return false
      }
    }
    if (b[key] === undefined || b[key] === null) {
      return false
    }
    if (!bKeys.includes(key)) {
      return false
    }
    if (typeof a[key] === 'object') {
      if (!deepCompare(a[key], b[key])) {
        return false
      }
    } else if (a[key].isArray) {
      if (!deepCompareArray(a[key], b[key])) {
        return false
      }
    } else {
      // test that key-values are equal
      if (a[key] !== b[key]) {
        return false
      }
    }
  }

  return true
}

const deepCompareArray = (a, b) => {
  if (a.length !== b.length) {
    return false
  }
  a.forEach((el, idx) => {
    if (typeof el === 'object') {
      if (!deepCompare(el, b)) {
        return false
      }
    } else if (el.isArray) {
      if (!deepCompareArray(el, b[idx])) {
        return false
      }
    }
    if (el !== b[idx]) {
      return false
    }
  })
  return true
}

const tests = [
  deepCompare({ name: 'joe' }, { name: 'joe' }),
  deepCompare({ name: 'joe' }, { name: 'hector' })
]

tests.forEach(test => {
  console.log(test)
})
