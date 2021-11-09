// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.
// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value 

function array(str) {
  if (!str || str.length <= 3 || str === '') {
    return null;
  }

  const result = str.split(',').slice(1, -1).join(' ');

  return result || null;
}

console.log(array(''))
console.log(array('1,2'))
console.log(array("1,2,3"))
console.log(array("1,2,3,4"))