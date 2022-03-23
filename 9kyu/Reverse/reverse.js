function revers(num) {
  num += '';

  let reverseNum = '';

  for (let i = num.length - 1; i >= 0; i--) {
    reverseNum += num[i]
  }
  return +reverseNum
}

console.log(revers(3468))