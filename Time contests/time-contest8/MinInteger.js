function runProgram(input) {
  input = input.trim().split('\n');
  for (let i = 1; i < input.length; i++) {
    nums = input[i].trim().split('').sort();
    if (nums[0] == '-') {
      nums.push('-');
      nums.reverse();
      nums.pop();
      console.log(nums.join(''));
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
          nums[i] = '';
        }
      }
      console.log(nums.join(''));
    }
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
    53334121000
    -1002911
    -000000292`);
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
