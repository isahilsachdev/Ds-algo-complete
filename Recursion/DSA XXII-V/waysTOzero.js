function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 1; i < input.length; i++) {
    console.log(zeroways(input[i]));
  }

  function zeroways(n) {
    if (n == 0) {
      return 1;
    }
    if (n < 0) {
      return 0;
    }
    return zeroways(n - 1) + zeroways(n - 2) + zeroways(n - 5);
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
    4
    6`);
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
