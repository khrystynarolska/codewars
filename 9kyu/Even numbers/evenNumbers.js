// Вивести парні числа від 0 до 20

// for (let i = 0; i <= 20; i++) {
//   if(i % 2 == 0) {
//     return i
//   }
// }

let arr = [];
for (let i  = 0; i < 20; i+=2) {
  arr.push(i)
}

console.log(arr)