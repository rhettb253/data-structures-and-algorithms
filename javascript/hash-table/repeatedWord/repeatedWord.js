// function that finds the first word to occur more than once in a string
function repeatedWord(str) {
  const removePunctuationRegex = /[\p{P}]/gu;
  const stringWithoutPunctuation = str.replace(removePunctuationRegex, '');
  const wordsObject = {};
  const wordsArr = stringWithoutPunctuation.split(' ');
  for (let i = 0; i < wordsArr.length; i++) {
    let word = wordsArr[i];
    if (wordsObject[word]) return word;
    wordsObject[word] = word;
  }
  return 'No repeated words found.'
}

module.exports = repeatedWord;
