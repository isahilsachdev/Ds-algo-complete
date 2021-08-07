function runProgram(input) {
  input = input.trim().split('\n');
  let nums = input[1].trim().split(' ').map(Number);
  let n = 1;
  let side = [];
  res = [];
  Array.prototype.top = function () {
    return this[this.length - 1];
  };
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == n) {
      res.push(nums[i]);
      n++;
    } else {
      while (side.top() == n) {
        res.push(side.top());
        side.pop();
        n++;
      }
      if (side.top() < nums[i]) {
        break;
      } else side.push(nums[i]);
    }
  }
  while (side.top() == n) {
    res.push(side.top());
    side.pop();
    n++;
  }

  let flag = true;
  res.map((a, i) => {
    if (a != i + 1) {
      flag = false;
      return;
    }
  });

  console.log(flag ? 'yes' : 'no');
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`5
  5 1 2 4 3 
  0`);
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
