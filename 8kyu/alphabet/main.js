// З абетки необхідно взяти 6 випадкових букв

const alphabet = 'abcdefghiklmnopqrstuvwxyz';
let randomString = '';
for (let i = 0; i < alphabet.length; i++) {
  if (randomString.length < 6) {
    randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
  }
}

console.log(randomString);