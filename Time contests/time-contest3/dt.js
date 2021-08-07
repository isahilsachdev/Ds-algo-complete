let n = '32';
let sum = 0;
let m = n.split('').map((a) => (sum += Number(a)));
console.log('m', m);
console.log(Number(n) + sum);
console.log('n', n);
