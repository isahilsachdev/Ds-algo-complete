function runProgram(input) {
  input = input.trim().split('\n');
  k = input[0].trim().split(' ').map(Number)[1];

  nums = input[1]
    .trim()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);

  lo = 0;
  hi = nums.length - 1;
  count = 0;
  console.log(Binary(nums, lo, hi, k));

  function Binary(arr, lo, hi, k) {
    console.log('he', lo, hi);
    mid = lo + Math.floor((hi - lo) / 2);
    if (lo > hi) {
      return count;
    }
    if (arr[mid] == k) {
      count++;
      return Binary(arr, lo, mid - 1, k);
      return Binary(arr, mid + 1, hi, k);
    }
    if (arr[mid] > k) {
      hi = mid - 1;
      return Binary(arr, lo, hi, k);
    }
    if (arr[mid] < k) {
      lo = mid + 1;
      return Binary(arr, lo, hi, k);
    }
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`6 3
  2 2 2 3 3 3 6 9`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
  });

  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
