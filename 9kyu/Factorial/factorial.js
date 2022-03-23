function factorial(n) {
  let fact = 1;

  if (n == 0) return fact;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact
}

let a = factorial(0);
console.log(a);

let b = factorial(3);
console.log(b);

let c = factorial(5);
console.log(c);