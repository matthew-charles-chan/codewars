const balance = (left, right) => {

  const countChar = (string) => {
    let count = 0;

    for (const char of string) {
      const charCode = char.charCodeAt(0)
      if (charCode === 33) {
        count += 2
      } else if (charCode === 63){
        count += 3
      }
    }
    return count;
  }

  let leftCount = countChar(left);
  let rightCount = countChar(right);

  console.log(leftCount, rightCount)

  if (leftCount > rightCount) {
    return "Left"
  } else if (rightCount > leftCount) {
    return "Right"
  } else {
    return "Balance"
  }
}

console.log(balance("!!","??"))