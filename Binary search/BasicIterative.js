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
  flag = true;
  while (lo <= hi) {
    mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] == k) {
      flag = false;
      break;
    } else if (nums[mid] > k) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  console.log(flag ? '-1' : '1');
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`6 5
  11 34 5 4 21 0
     `);
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
