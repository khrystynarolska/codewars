// Доповніть розв’язання так, щоб воно перевернуло переданий у нього рядок.

function solution(str) {
  let o = '';
  for (let i = str.length - 1; i >= 0; i--)
    o += str[i];
  return o;
}