let arr1 = [3, 4, 2, 2, 1, 2, 3, 4];
let arr2 = [1, 4, 4, 3, 2, 1, 1]

const mySort = numbers => numbers.sort((a, b) => a - b);
const makeUniq = array => [...new Set(array)];

function combineTwoArrays (arr1, arr2) {
  const arr3 = arr1.concat(arr2);
  const sortedArr = mySort(arr3);
  const numbers = makeUniq(sortedArr);

  let names = {}

  for (let i = 0; i < numbers.length; i++) {
    const nameOfArray = `number${numbers[i]}`;
    names[nameOfArray] = []
  }

  for (let i = 0; i < sortedArr.length; i++) {
    if (sortedArr[i] === sortedArr[i + 1] || sortedArr[i] === sortedArr[i - 1]) {
      const name = `number${sortedArr[i]}`;
      names[name].push(sortedArr[i]);
    }
  }
  const res = Object.values(names).map(i => i.length)

  const resMax = Math.max(...res)
  const resMin = Math.min(...res)

  return resMax * resMin
}

console.log(combineTwoArrays(arr1, arr2))