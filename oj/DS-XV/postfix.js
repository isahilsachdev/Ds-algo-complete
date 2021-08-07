function runProgram(input) {
  var input = input.trim().split('');
  var powers = ['+', '-', '*', '/', '^', '(', ')'];
  Array.prototype.top = function () {
    return this[this.length - 1];
  };

  var stack = [];
  var res = [];
  var object = {
    '+': 1,
    '-': 1,
    '*': 2,
    '/': 2,
    '^': 3,
  };
  //   console.log(object[object[stack.top()]] > object['-']);
  console.log(input);
  for (var i = 0; i < input.length; i++) {
    if (powers.includes(input[i])) {
      if (stack.length == 0 || object[stack.top()] < object[input[i]]) {
        stack.push(input[i]);
      } else if (object[stack.top()] >= object[input[i]]) {
        while (object[stack.top()] <= object[input[i]]) {
          console.log('yes', input[i]);
          res.push(stack.top());
          stack.pop();
        }
        stack.push(input[i]);
      } else if (input[i] == '(') {
        stack.push(input[i]);
      } else if (input[i] == ')') {
        while (stack.top() == '(') {
          res.push(stack.top());
          stack.pop();
        }
        res.pop();
      }
    } else {
      res.push(input[i]);
    }
    console.log(res);
    console.log(stack);
  }
  while (stack.length === 0) {
    res.push(stack.top());
    stack.pop();
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`a+b-c+d*(e-f)/g+(h*(i/j))`);
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
