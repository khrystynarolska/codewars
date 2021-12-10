function adjacentElementsProduct(array) {
  let newArray = []

  for (let i = 0; i < array.length; i++) {
    let current = array[i];
    let next = array[i+1];

    if (next !== undefined) {
      newArray.push(current * next)
    }
  }

  return Math.max(...newArray)
}

console.log(adjacentElementsProduct([5, 1, 2, 3, 1, 4]))