function runProgram(input) {
  input = input.trim().split('\n');
  //   k = input[0].trim().split(' ').map(Number)[1];
  nums = input[1].trim().split(' ').map(Number);
  // .sort((a, b) => a - b);
  lo = 0;
  hi = nums.length - 1;

  while (lo <= hi) {
    mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] == nums[hi]) {
      hi--;
    } else if (nums[mid] > nums[hi]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  console.log(nums[lo]);
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`10
    4 6 7 9 10 -1 0 1 2 3`);
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
