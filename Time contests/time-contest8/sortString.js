function runProgram(input) {
  input = input.split('\n');
  nums = input[1].trim().split('').map(Number);
  i = 0;
  j = nums.length - 1;
  count = 0;
  while (i < j) {
    if (nums[i] == 1 && nums[j] == 0) {
      count++;
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
      j--;
    } else if (nums[i] == 0) {
      i++;
    } else if (nums[j] == 1) {
      j--;
    } else if (nums[i] == 1 && nums[j] == 1) {
      j--;
    } else if (nums[i] == 0 && nums[j] == 0) {
      i++;
    }
  }
  console.log(count);
  //   console.log(nums.join(''));
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`5
  11111`);
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
