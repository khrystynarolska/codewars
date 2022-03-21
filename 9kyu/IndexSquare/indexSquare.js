// Кожен елемент масиву дорувнює квадрату його індексу

let arr = [];

// for (let i = 0; i < 10; i++) {
//   arr.push(i*i)
// }
//
for (let i = 0; i < 10; i++) {
  arr.push(Math.pow(i, 2))
}

console.log(arr)