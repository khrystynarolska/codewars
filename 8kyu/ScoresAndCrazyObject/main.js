// 1
const scores = {
  Katy: 0,
  Jimmy: 0,
  Anna: 0,
  Jinen: 0
}

scores.Jinen += 3;
scores.Katy += 5;
scores.Anna += 8;
scores.Jimmy += 2;
scores.Katy -=2;
// console.log(scores)

// 2
let myCrazyObject = {
  name: 'A ridiculous object',
  someArray: [7, 9, { purpose: 'confusion', number: 123 }, 3.3],
  randomAnimal: 'Banana Shark'
}

console.log(myCrazyObject.someArray[2].number)