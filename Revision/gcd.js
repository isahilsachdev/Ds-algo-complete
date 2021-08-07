n = 6;
m = 12;
max = Math.min(n, m);
ans = -1;
for (let i = 0; i <= max; i++) {
  if (m % i == 0 && n % i == 0) {
    ans = Math.max(ans, i);
  }
}
console.log(ans);
