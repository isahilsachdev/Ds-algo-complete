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
  ans = null;

  while (lo <= hi) {
    mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] == k) {
      hi = mid - 1;
      ans = mid;
    } else if (nums[mid] > k) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  console.log(ans !== null ? ans : -1);
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`5 2
    1 1 0 2 5`);
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
