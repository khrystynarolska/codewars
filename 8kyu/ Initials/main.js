// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.
// The output should be two capital letters with a dot separating them.


function abbrevName(string) {
  names = string.split(' ');
  initials = names[0].substring(0, 1).toUpperCase() + ".";
  if (names.length > 1) {
    initials += names[names.length - 1].substring(0, 1).toUpperCase();
  }
  return initials
}

//

function abbrevName(name) {
  return name.split(' ').map(i => i[0].toUpperCase()).join('.')
}

console.log(abbrevName('hello boy'));