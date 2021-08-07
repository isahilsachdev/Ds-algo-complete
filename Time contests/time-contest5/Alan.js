function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 1; i < input.length; i++) {
    let code = input[i].trim().split('');
    let stack = [];
    for (let j = 0; j < code.length; j++) {
      if (code[j] == '#') {
        if (stack.length) {
          stack.pop();
        } else stack.push(' ');
      } else stack.push(code[j]);
    }
    console.log(stack.join(''));
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
ab#d
b##ccc`);
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
