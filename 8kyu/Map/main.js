let arr = [2, 6, 67, 33, 55];
let i = 0;

let arrr = []

let res = arr.map(el => {
  arrr.push(el * el);
  return el * 2
})
console.log(res)
console.log(arrr)