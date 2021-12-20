/*
You need to cast the whole array to the correct type.
Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.
*/

function toNumberArray(stringarray){
  return stringarray.map(i => +i)
}

console.log(toNumberArray(['2232']))