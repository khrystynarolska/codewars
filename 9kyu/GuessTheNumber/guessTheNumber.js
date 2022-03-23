function randomNumb() {
  let num = Math.floor(Math.random() * 100);

  for (let i = 1; i <= 10; i++) {
    let result = +prompt(`Спроба №${i}. Ведіть число: `)

    if (result == num) {
      return alert(`Ви вгадали число. Спроб: ${i}. Число: ${num}`)
    } else if (result > num) {
      alert(`Ваше число ${result} більше загаданого. Спроб: ${i}`)
    } else if (result < num) {
      alert(`Ваше число ${result} меньше загаданого. Спроб: ${i}`)
    } 
  }
  
  return alert(`Ви не вгадали число. Число: ${num}`)
}

randomNumb()