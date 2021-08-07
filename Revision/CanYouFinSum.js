function runProgram(input) {
  Array.prototype.top = function () {
    return this[this.length - 1];
  };
  input = input.trim().split('\n');
  let nums = input[1].trim().split(' ').map(Number);
  let stack1 = [];
  let res1 = [];
  let stack2 = [];
  let res2 = [];

  for (let i = 0, j = 0; i < nums.length; i++) {
    //   for nearest big to left side
    if (i == 0) {
      stack1.push(nums[i]);
      res1.push(-1);
    } else {
      while (stack1.length > 0 && stack1.top() <= nums[i]) {
        stack1.pop();
      }
      if (stack1.length == 0) {
        res1.push(-1);
        stack1.push(nums[i]);
      } else {
        res1.push(nums.indexOf(stack1.top()) + 1);
        stack1.push(nums[i]);
      }
    }
  }
  //   for nearest big to right side
  for (let i = nums.length - 1; i >= 0; i--) {
    if (i == nums.length - 1) {
      stack2.push(nums[i]);
      res2.push(-1);
    } else {
      while (stack2.length > 0 && stack2.top() <= nums[i]) {
        stack2.pop();
      }
      if (stack2.length == 0) {
        res2.push(-1);
        stack2.push(nums[i]);
      } else {
        res2.push(nums.indexOf(stack2.top()) + 1);
        stack2.push(nums[i]);
      }
    }
  }
  res2.reverse();
  let sum = 0;
  let result = [];
  res1.map((a, i) => {
    result.push(a + res2[i]);
  });
  console.log(result.join(' '));
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
