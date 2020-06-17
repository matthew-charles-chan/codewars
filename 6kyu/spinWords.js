const spinWords = (string) => {
  const words = string.split(' ');
  let reverseWordsArr = [];

  for (const word of words) {
    if (word.length >= 5) {
      reverseWordsArr.push(word.split('').reverse().join(''));
    } else {
      reverseWordsArr.push(word);
    }
  }
  

  return reverseWordsArr.join(' ');

};


console.log(spinWords("Seriously this is the last one"));