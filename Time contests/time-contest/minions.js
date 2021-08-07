function runProgram(input) {
  let nums = input.trim().split('\n')[1];
  let stack = [];
  Array.prototype.top = function () {
    return this[this.length - 1];
  };

  for (var i = 0; i < nums.length; i++) {
    console.log(',', nums[i]);
    if (nums[i] == stack.top()) {
      stack.pop();
    } else stack.push(nums[i]);
  }
  console.log(stack.length ? stack.join('') : -1);
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`12
    aabbc`);
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
