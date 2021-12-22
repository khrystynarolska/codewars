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

// console.log(myCrazyObject.someArray[2].number)


// 3
// const user = '';
// const myName = 'Khrysytyna';

// if (user === myName) {
//   console.log('Hello me!') 
// } else {
//   console.log('Hello stranger!')
// }


// 4
// let sheepCounted = 0;

// while (sheepCounted <= 10) {
//   console.log('I have counted ' + sheepCounted + ' sheep!')
//   sheepCounted++;
// }
// console.log('Zzzzzzzz');


// 5
// let animals = ['Lion', 'Flamingo', 'Polar Bear', 'Boa Constrictor'];

// for (let i = 0; i < animals.length; i++) {
//   console.log('This zoo contains a ' + animals[i] + '.')
// }


// 6
// for (let x = 2; x < 10000; x = x * 2) {
//   console.log(x)
// }


//7
let x = 2;

while (x < 10000) {
  console.log(x)
  x = x * 2
}