function runProgram(input) {
  for (let i = input; i >= 0; i--) {
    res = '';
    for (var j = 0; j < i; j++) {
      res += '*' + ' ';
    }
    for (let j = i; j < input; j++) {
      res += ' ' + ' ';
    }
    console.log(res);
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`5`);
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
