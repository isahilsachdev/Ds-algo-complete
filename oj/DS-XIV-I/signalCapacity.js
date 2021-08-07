function runProgram(input) {
  input = input.split('\n');

  Array.prototype.top = function () {
    return this[this.length - 1];
  };
  for (var i = 2; i < input.length; i = i + 2) {
    var nums = input[i].trim().split(' ').map(Number);

    var result = [1];
    var stack = [[nums[0], 1]];

    for (var j = 1; j < nums.length; j++) {
      while (stack.length > 0 && stack.top()[0] <= nums[j]) {
        stack.pop();
      }
      if (stack.length == 0) {
        result.push(j + 1);
        stack.push([nums[j], j + 1]);
      } else {
        result.push(j + 1 - stack.top()[1]);
        stack.push([nums[j], j + 1]);
      }
    }
    console.log(result.join(' '));
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
    7
    100 80 60 70 60 75 85
    5
    3 5 0 9 8`);
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
