// Числа на зменшення (від 30 до 0) та елементи масиву має ділитись на 3

// let arr = [];

// for (let i = 30; i > 0; i-=3) {
//   arr.push(i)
// }

// console.log(arr)

//


let arr = [];

for (let i = 30; i > 0; i--) {
  if (i % 3 == 0) {
    arr.push(i)
  }
}

console.log(arr)