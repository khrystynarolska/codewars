// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
  let str = n + ''

  let split = str.split('').reverse().map(i => +i)
  return split
}

console.log(digitize(35231))