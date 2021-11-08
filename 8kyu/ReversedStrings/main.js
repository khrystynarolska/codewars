// Доповніть розв’язання так, щоб воно перевернуло переданий у нього рядок.

function solution(str) {
  let o = '';

  for (let i = str.length - 1; i >= 0; i--)
    o += str[i];
  return o;
}

console.log(solution('world'))


///

const solution = str => str.split('').reverse().join('');

///

const solution = str => [...str].reverse().join('')