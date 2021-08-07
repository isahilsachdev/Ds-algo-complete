var res = [];
function Sub(arr, start, end) {
  if (end === arr.length) {
    return;
  } else if (start > end) {
    return Sub(arr, 0, end + 1);
  }
  var current = [];
  for (let i = start; i <= end; i++) {
    current.push(arr[i]);
  }
  res.push(current.join(' '));
  Sub(arr, start + 1, end);
}

var arr = [1, 2, 3];
Sub(arr, 0, 0);
console.log(res.join('\n'));
