n = 0;
// fib series = [0,1,1,2,3,5,8]
function fib(n) {
  if (n == 0) {
    return 0;
  }
  if (n <= 3) {
    return 1;
  }
  return fib(n - 1) + fib(n - 2);
}

console.log(fib(n));
