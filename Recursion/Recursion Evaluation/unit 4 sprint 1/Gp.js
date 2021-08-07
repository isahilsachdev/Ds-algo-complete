function runProgram(input) {
  input = input.trim().split(' ');

  function gp(n, r) {
    if (n == 0) {
      return 1;
    }
    return 1 / r ** n + gp(n - 1, r);
  }
  console.log(gp(input[0], input[1]).toPrecision(4));
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`3 5`);
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
