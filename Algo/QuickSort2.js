function QuickSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  // console.log('arr', arr);
  left = [];
  right = [];
  pivot = arr[arr.length - 1];
  // console.log('pivot', pivot, 'half', half);
  //   console.log('left', left, 'right', right);
  //   console.log('random', random);
  for (let i = 0; i < arr.length - 1; i++) {
    // if (i != half) {
    // console.log(i);
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else right.push(arr[i]);
    // }
  }
  console.log(left, right);
  if (left.length > 0 && right.length > 0) {
    return [...QuickSort(left), pivot, ...QuickSort(right)];
  } else if (left.length > 0) {
    return [...QuickSort(left), pivot];
  } else if (right.length > 0) {
    return [pivot, ...QuickSort(right)];
  }
}
const arr = [3, 2, 1, 7, 4];
console.log(QuickSort(arr));
