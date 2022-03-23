function number(num) {
  num += '';

  let chet = 0;
  let nechet = 0;

  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 == 0) chet++;
    else nechet++
  }

  return {
    'Кількість парних цифр': chet,
    'Кількість не парних цифр': nechet,
  }
}

console.log(number(34867))