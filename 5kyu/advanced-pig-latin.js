const translate = (str) => {
  let translatedSentence = ''
  const subStrgs = str.split(' ')

  const translatedWords = subStrgs.map(subStr => {
    const capitalized = subStr[0] === subStr[0].toUpperCase()
    let [word, punctuation] = subStr.split(/\b/)
    word = word.toLowerCase()
    const firstConstStr = word.split(/[aeiou]/i)[0]
    word = firstConstStr ? word.slice(firstConstStr.length) + firstConstStr + 'ay' : word + 'way'

    if (capitalized) {
      word = word[0].toUpperCase() + word.slice(1)
    }
    if (punctuation) {
      word = word + punctuation
    }
    return word
  })
  translatedSentence = translatedWords.join(' ')
  return translatedSentence
}

const strings = [['hello', 'ellohay'], ['hello world', 'ellohay orldway'], ['Hello World', 'Ellohay Orldway'], ['Pizza? Yes Please!!', 'Izzapay? Esyay Easeplay!!']]

strings.forEach(string => {
  console.log(`${translate(string[0])} === ${string[1]}`)
})
