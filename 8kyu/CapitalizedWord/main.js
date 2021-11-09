// The first letters of each word are in uppercase

function capitalLetter (str) {
  return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

console.log(capitalLetter('hello world learn react'))