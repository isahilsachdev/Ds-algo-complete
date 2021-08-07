function runProgram(input) {
  input = input.trim().split(' ').map(Number);
  console.log(MergeSort(input));

  function MergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = arr.slice(0, mid);
    let right = arr.slice(mid);
    return Merge(MergeSort(left), MergeSort(right));
  }
  function Merge(leftArr, rightArr) {
    let leftIndex = 0;
    let rightIndex = 0;
    let result = [];
    while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
      if (leftArr[leftIndex] < rightArr[rightIndex]) {
        result.push(leftArr[leftIndex]);
        leftIndex++;
      } else {
        result.push(rightArr[rightIndex]);
        rightIndex++;
      }
    }
    return [
      ...result,
      ...leftArr.slice(leftIndex),
      ...rightArr.slice(rightIndex),
    ];
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`4 2 5 7 1 8 2 6`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    read = read.replace(/\n$/, '');
    runProgram(read);
  });
  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}

// MergeSort(0, input.length - 1);

// function MergeSort(lo, hi) {
//   if (lo < hi) {
//     let mid = Math.floor((hi + lo) / 2);
//     console.log('mid', mid);
//     MergeSort(lo, mid);
//     MergeSort(mid + 1, hi);
//     console.log(lo, mid, hi);

//     Merge(lo, mid, hi);
//   } else return;
// }
// const left = [1, 2, 3, 4, 5, 6];
// const left2 = [1, 2, 3, 4, 5, 6];
// const ri = left.splice(2, 3);
// const ri2 = left2.slice(2, 3);
// console.log(ri);
// console.log(ri2);
