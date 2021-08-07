function runProgram(input) {
  input = input.trim().split('\n');
  nums = input[1]
    .trim()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  for (let i = 2; i < input.length; i++) {
    lo = 0;
    hi = nums.length - 1;
    k = Number(input[i]);

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
    console.log(flag ? 'NO' : 'YES');
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`5 10
  50 40 30 20 10
  10
  20
  30
  40
  50
  60
  70
  80
  90
  100`);
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
