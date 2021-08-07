function runProgram(input) {
  input = input.trim().split('\n');
  k = input[0].trim().split(' ').map(Number)[1];
  nums = input[1].trim().split(' ').map(Number);
  lo = 0;
  hi = nums.length - 1;
  ans = 0;
  while (lo <= hi) {
    mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] < k) {
      lo = mid + 1;
    } else if (nums[mid] > k) {
      hi = mid - 1;
    } else {
      ans++;
      cur = mid - 1;
      cur2 = mid + 1;
      while (nums[cur] == k) {
        ans++;
        cur = cur - 1;
      }
      while (nums[cur2] == k) {
        ans++;
        cur2 = cur2 + 1;
      }

      lo = hi + 1;
    }
  }
  console.log(ans);
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`10 7
  2 5 7 7 10 11 15 18 20 22`);
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
