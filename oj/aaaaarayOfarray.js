function ProArr(arr) {
  let left = new Array(arr.length);
  let right = new Array(arr.length);
  let output = [];
  left[0] = 1;
  right[right.length - 1] = 1;

  //   left
  for (let i = 1; i < arr.length; i++) {
    left[i] = left[i - 1] * arr[i - 1];
  }

  //   right
  for (let i = arr.length - 2; i >= 0; i--) {
    right[i] = right[i + 1] * arr[i + 1];
  }

  //   output
  for (let i = 0; i < arr.length; i++) {
    output.push(left[i] * right[i]);
  }

  return output;
}
let arr = [4, 2, 5, 3];
console.log(ProArr(arr));
