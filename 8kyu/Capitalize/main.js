function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}

// function capitalizeAll(str) {
//   const arr = str.split(' ')
//   return arr.map(i => capitalize(i)).join(' ')
// }

//

function capitalizeAll(str) {
  const arr = str.split(' ')

  for (let i = 0; i < arr.length; i++) {
    arr[i] = capitalize(arr[i])
  }
  return arr.join(' ')
}


console.log(capitalize('javascript'))
console.log(capitalizeAll('javascript is awesome'))

