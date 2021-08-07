function runProgram(input) {
  input = input.trim().split('\n');
  const queue = [];
  const stack = [];

  for (var i = 1; i < input.length; i++) {
    let nums = input[i].trim().split(' ');
    // console.log(nums[0]);
    switch (nums[0]) {
      case '1': {
        queue.push(nums[1]);
        break;
      }
      case '2': {
        stack.push(nums[1]);
        break;
      }
      case '3': {
        queue.length ? console.log(queue[0]) : console.log(-1);
        break;
      }
      case '4': {
        stack.length ? console.log(stack[stack.length - 1]) : console.log(-1);
        break;
      }
      case '5': {
        if (queue) {
          stack.push(queue[0]);
          queue.splice(0, 1);
          break;
        } else {
          console.log(-1);
        }
      }
    }
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`1
4`);
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
