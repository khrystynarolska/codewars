const alphabet = 'abcdefghijklmnopqrstuvwxyz';


function getSumOfIndexes(word) {
  const arrayOfLetters = word.split('');
  const arrayOfIndexes = arrayOfLetters.map(i => alphabet.indexOf(i))

  return arrayOfIndexes.reduce((acc, val) => acc + val, 0);
}

console.log(getSumOfIndexes('apple'))