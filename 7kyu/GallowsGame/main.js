// Створюємо масив із слів

let words = [
  'javascript',
  'monkey',
  'amazing',
  'pancake',
  'warm',
  'husband',
  'winter',
  'something'
]

// Обираємо випадкове слово
let word = words[Math.floor(Math.random() * words.length)];

// Встановлюємо масив відповідей
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = '_';
}

let remainingLetters = word.length;

// Ігравий цикл
while (remainingLetters > 0) {
  // Показує гравцю його прогрес
  alert(answerArray.join(' '));

  // Отримаємо варіанти відповідей від гравця
  let guess = prompt('Guess a letter, or click Canncel to stop playing.');

  if (guess === null) {
    //Виходимо з ігрвого циклу
    break;
  } else if (guess.length !== 1) {
    alert('Please enter a single letter.')
  } else {
    // Оновлюємо стан гри за допомогою змінного параметра guess
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess.toLowerCase()) {
        answerArray[j] = guess.toLowerCase();
        remainingLetters--;
      }
    }
  }
  // Кінець ігрового циклу
}

// Показуємо відповідь та вітаємо гравця
alert(answerArray.join(' '));
alert('Good job! The answer was ' + word);