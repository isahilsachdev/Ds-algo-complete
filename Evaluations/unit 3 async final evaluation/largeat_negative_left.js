function runProgram(input) {
  input = input.trim().split('\n');
  Array.prototype.top = function () {
    return this[this.length - 1];
  };
  for (var i = 2; i < input.length; i = i + 2) {
    let nums = input[i].trim().split(' ').map(Number);
    var stack = [];
    var res = [];
    var hold = '';
    // console.log(nums);
    for (var j = 0; j < nums.length; j++) {
      if (nums[j] >= 0) {
        if (stack.length === 0) {
          res.push('0');
        } else {
          res.push(stack.top());
        }
      } else {
        while (stack.length > 0 && stack.top() <= nums[j]) {
          hold = stack.top();
          stack.pop();
        }
        if (stack.length === 0) {
          hold ? res.push(hold) : res.push('0');
          stack.push(nums[j]);
        } else if (stack.top() > nums[j]) {
          res.push(stack.top());
        }
      }
    }
    console.log(res.join(' '));
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
    5
    -2 -1 5 4 -3
    5
    1 2 -1 3 4`);
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
