/*
You will be given two strings: lamps and drone. lamps represents a row of lamps, currently off, each represented by x. 
When these lamps are on, they should be represented by o.

The drone string represents the position of the drone T (any better suggestion for character??) and its flight path up 
until this point =. The drone always flies left to right, and always begins at the start of the row of lamps. Anywhere 
the drone has flown, including its current position, will result in the lamp at that position switching on.

Return the resulting lamps string. See example tests for more clarity.
*/


function flyBy(lamps, drone) {
  let result = lamps.split('');
  let len = (lamps.length < drone.length) ? lamps.length : drone.length;
  for (let i = 0; i < len; i++) { 
    result[i] = 'o'; 
  }
  return (result.join(''));
}

console.log(flyBy('xxxxxx', '====T'))

//

const flyBy2 = (lamps, drone) => [...lamps].fill(`o`, 0, drone.length).join(``)

console.log(flyBy2('xxxxxx', '====T'))