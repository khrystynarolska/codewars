// Write a function, gooseFilter / goose-filter / goose_filter / GooseFilter, that takes an array of strings as 
// an argument and returns a filtered array containing the same elements but with the 'geese' removed.

function gooseFilter (birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  let result = []

  for (let i = 0; i < birds.length; i++) {
    if (!geese.includes(birds[i])) {
      result.push(birds[i]);
    }
  }

  return result
};

console.log(gooseFilter(["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"]))
