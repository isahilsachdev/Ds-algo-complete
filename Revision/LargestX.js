function runProgram(input) {
  input = input.trim().split('\n');
  for (let i = 2; i < input.length; i += 2) {
    ans = -1;
    nums = input[i]
      .trim()
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);

    j = 0;
    while (nums[j] < 0) {
      if (nums[nums.length - 1] == Math.abs(nums[j])) {
        ans = Math.abs(nums[j]);
        break;
      } else if (nums[nums.length - 1] > Math.abs(nums[j])) {
        nums.pop();
      } else {
        j++;
      }
    }
    console.log(ans);
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
    5
    2 1 -1 -2 3
    5
    6 -3 2 -4 -6 4 -2`);
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

// let a = ['a', 'abc', 'abc', 'c', 'c'];
// let c = [...new Set(a)];
// console.log(c);
