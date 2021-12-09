const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function sum(arr) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    num += arr[i];
  }
  return num
}

function getSumOfIndexes(word) {
  const arrayOfLetters = word.split('');
  const arrayOfIndexes = arrayOfLetters.map(i => alphabet.indexOf(i))
  const mathMax = Math.max(...arrayOfIndexes);
  const mathMin = Math.min(...arrayOfIndexes);

  return sum([mathMax, mathMin])
}

console.log(getSumOfIndexes('room'))