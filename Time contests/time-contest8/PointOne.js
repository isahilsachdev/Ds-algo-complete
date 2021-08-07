function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 2; i < input.length; i += 2) {
    nums = input[i].trim().split(' ');
    lo = 0;
    hi = nums.length - 1;
    ans = null;
    while (lo <= hi) {
      mid = lo + Math.floor((hi - lo) / 2);

      if (nums[mid] == 1) {
        hi = mid - 1;
        ans = mid;
      } else if (nums[mid] == 0) {
        lo = mid + 1;
      }
    }
    console.log(ans == null ? '-1' : ans);
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
    4
    0 0 0 1 
    1
    1`);
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
