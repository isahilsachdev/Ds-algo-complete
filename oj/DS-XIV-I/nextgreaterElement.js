function runProgram(input) {
  input = input.split('\n');
  var test = input[0];
  Array.prototype.top = function () {
    return this[this.length - 1];
  };

  for (var i = 2; i <= 2 * test; i = i + 2) {
    var input2 = input[i].trim().split(' ').map(Number);
    var stack = [];
    var result = [];

    for (var j = input2.length - 1; j >= 0; j--) {
      if (j == input2.length - 1) {
        result.push(-1);
        stack.push(input2[j]);
      } else {
        while (stack.length > 0 && input2[j] >= stack.top()) {
          stack.pop();
        }
        if (stack.length === 0) {
          result.push(-1);
          stack.push(input2[j]);
        } else {
          result.push(stack.top());
          stack.push(input2[j]);
        }
      }
    }
    console.log(result.reverse().join(' '));
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`4
    1
    9444
    6
    1549 9638 7397 8313 3150 7284
    3
    9213 9172 1892
    5
    3988 4871 1119 5654 9739 `);
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
