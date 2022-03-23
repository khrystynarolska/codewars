let addAndMul = function (num) {
  num += '';

  let add = 0;
  let mul = 1;

  for (let i = 0; i < num.length; i++) {
    add += +num[i];
    mul *= num[i];
  }
  return {
    'Сума': add,
    'Добуток': mul
  }
}

console.log(addAndMul(795))