function runProgram(input) {
  input = input.split('\n');
  input.shift();
  input = input.map((i) => i.trim().split(' ').map(Number));
  Array.prototype.top = function () {
    return this[this.length - 1];
  };

  var stack = [];
  var S = 0;
  for (var i = 0; i < input.length; i++) {
    if (input[i][0] == 1) {
      stack.push(input[i][1]);
    } else {
      if (stack.length) {
        S += stack.top();
        stack.pop();
      } else {
        S -= 1;
      }
    }
  }
  console.log(S);
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`5
  1 2
  1 3
  2 
  2
  2`);
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
