function runProgram(input) {
  var nums = input
    .split('\n')[1]
    .trim()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  //   console.log(nums);
  var left = [];
  var right = [];
  var res = [];
  for (let i = 0; i < nums.length; i++) {
    if (i % 2 == 0) {
      left.push(nums[i]);
    } else right.push(nums[i]);
  }
  //   console.log(left, right);

  for (let i = 0; i < left.length; i++) {
    res.push(right[i], left[i]);
  }
  console.log(res.join(' '));
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`10
  9 8 4 10 3 6 5 7 1 2`);
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
