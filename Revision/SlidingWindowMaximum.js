arr = [1, 2, 3, 1, 4, 5];
k = 3;
res = '';
for (let i = 0; i < arr.length - 2; i++) {
  min = 0;
  for (let j = i; j < i + 3; j++) {
    if (arr[j] > min) {
      min = arr[j];
    }
  }
  res += min + ' ';
}
console.log(res);
