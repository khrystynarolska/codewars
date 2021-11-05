// Створіть функцію, яка перевіряє, чи число n ділиться на два числа x І y. Усі вхідні дані є додатними, відмінними від нуля цифрами.

function isDivisible(n, x, y) {
  if (n % x == 0 || n % y == 0) {
    return true 
  }
  
  return false
}
console.log(isDivisible(100, 5, 3))
