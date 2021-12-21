/*
The objective is to set each of the 26 characters of the output string to either '1' or '0' based on 
the fact whether the Nth letter of the alphabet is present in the input (independent of its case).

So if an 'a' or an 'A' appears anywhere in the input string (any number of times), set the first character 
of the output string to '1', otherwise to '0'. if 'b' or 'B' appears in the string, set the second character 
to '1', and so on for the rest of the alphabet.
*/

let nulls = '00000000000000000000000000';
let nullsArr = nulls.split('');

const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function change(string) {
  // step 1
  let cleanedStr = string.replace(/[^a-zA-Z]/g, "");
  let strArr = cleanedStr.split('');

  // step 2
  const indexes = [];

  for (let i = 0; i < strArr.length; i++) {
    if (alphabet.includes(strArr[i].toLowerCase())) {
      let pos = alphabet.indexOf(strArr[i].toLowerCase());
      indexes.push(pos)
    }
  }

  // step 3
  for (let i = 0; i < indexes.length; i++) {
    nullsArr[indexes[i]] = 1;
  }

  return nullsArr.join('');
}

console.log((change("")))