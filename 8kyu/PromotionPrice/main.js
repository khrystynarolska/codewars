const price = '2 5 3 7 9 12 9 3 5 4 9 7 12';

function promotionPrice (str) {
  const priceArr = str.split(' ').map(i => +i);
  let asc = 0;
  let desc = 0;

  for (let i = 0; i < priceArr.length; i++) {
    let current = priceArr[i];
    let next = priceArr[i+1];

    if (current < next) {
      asc++;
    } else if (current > next) {
      desc++;
    }
  }
  
  return asc * desc;
}

console.log(promotionPrice(price))