const randomBodyParts = ['Face', 'Nose', 'Hair'];
const randomAbjectives = ['Smelly', 'Boring', 'Stupid'];
const randomWords = ['Fly', 'Marmot', 'Stick', 'Monkey', 'Rat'];

let randomBodyPart = randomBodyParts[Math.floor(Math.random() * 3)];
let randomAbjective = randomAbjectives[Math.floor(Math.random() * 3)];
let randomWord = randomWords[Math.floor(Math.random() * 5)];

const randomInsult = ['Your', randomBodyPart, 'is', 'like', 'a', randomAbjective, randomWord + '!'].join(' ')

console.log(randomInsult)