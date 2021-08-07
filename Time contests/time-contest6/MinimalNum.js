function runProgram(input) {
  input = input.trim().split('\n');

  for (var i = 2; i < input.length; i += 2) {
    let nums = input[i].trim().split(' ').map(Number).sort();
    // console.log('bef', nums);

    for (var j = 0; j < nums.length; j++) {
      if (nums[0] == 0) {
        if (nums[j] != 0) {
          [nums[0], nums[j]] = [nums[j], nums[0]];
          break;
        }
      }
    }
    console.log(nums.join(''));
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
    4
    9 0 0 3 5 2 9 2 3 3 9 2 6 3 9 9 4 2 8 1 3 1 2 5 9 8 1 3 3 5 1 4 7 3 0 2 5 9 6 1 4 7 3 0 3 4 1 7 9 0 0 2 3 2 7 2 0 0 8 4 8 1 0 5 5 0 0 2 1 8 3 6 6 8 8 9 5 0 8 4 2 8 8 5 0 7 0 0 0 0 6 8 1 9 5 8 9`);
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
