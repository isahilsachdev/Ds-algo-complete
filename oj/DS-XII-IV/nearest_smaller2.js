function runProgram(input) {
  input = input.trim().split('\n');

  let nums = input[1].trim().split(' ').map(Number);

  var count = 0;
  var output = [];
  var stack = [];
  Array.prototype.top = function () {
    return this[this.length - 1];
  };

  for (var i = 0; i < nums.length; i++) {
    if (i == 0) {
      output.push(-1);
      stack.push(nums[i]);
    } else {
      while (stack.length > 0 && nums[i] <= stack.top()) {
        stack.pop();
      }
      if (stack.length === 0) {
        output.push(-1);
      } else {
        output.push(stack.top());
      }
      stack.push(nums[i]);
    }
  }
  console.log(output.join(' '));
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`8
    39 27 11 4 24 32 32 1`);
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
