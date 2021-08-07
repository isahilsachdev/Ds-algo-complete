function runProgram(input) {
  input = input.split('\n');
  var nums = input[1].trim().split(' ').map(Number);
  // console.log(nums);
  var chance = [];
  var chance2 = [];
  var stack = [];
  var stack2 = [];
  var res = [];
  Array.prototype.top = function () {
    return this[this.length - 1];
  };
  for (var i = 0; i < nums.length; i++) {
    while ((stack.length > 0, nums[stack.top()] <= nums[i])) {
      stack.pop();
    }
    if (stack.length == 0) {
      chance.push(-1);
      stack.push(i);
    } else {
      chance.push(stack.top() + 1);
      stack.push(i);
    }
  }
  for (var i = nums.length - 1; i >= 0; i--) {
    while ((stack2.length > 0, nums[stack2.top()] <= nums[i])) {
      stack2.pop();
    }
    if (stack2.length == 0) {
      chance2.push(-1);
      stack2.push(i);
    } else {
      chance2.push(stack2.top() + 1);
      stack2.push(i);
    }
  }
  chance2.reverse();
  // console.log(chance2);
  chance.map((a, i) => {
    res.push(a + chance2[i]);
  });
  console.log(res.join(' '));
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`5
  5 4 1 3 2`);
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
