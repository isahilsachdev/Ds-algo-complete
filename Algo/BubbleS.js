function runProgram(input) {
  input = input.trim().split('\n');
  var nums = input[1].trim().split(' ').map(Number);

  for (var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length - 1 - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        console.log(nums.join(' '));
      }
    }
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`5
      3 4 2 5 1
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
