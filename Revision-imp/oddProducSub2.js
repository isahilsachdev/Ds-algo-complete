// const arr = [1, 2, 3, 4, 6];
var arr = [12, 15, 7, 3, 25, 6, 2, 1, 1, 7];
const n = arr.length;

function sum(arr, n) {
  var count = 0;
  var k = 0;
  var last = -1;

  for (let i = 0; i < n; i++) {
    if (arr[i] % 2 === 0) {
      k = i - last - 1;

      count += (k * (k + 1)) / 2;
      last = i;
    }
  }
  k = n - last - 1;
  count += (k * (k + 1)) / 2;
  return count;
}

console.log(sum(arr, n));
