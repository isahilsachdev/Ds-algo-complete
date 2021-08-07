function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 1; i < input.length; i++) {
    let num = +input[i];
    console.log(Profit(num));
  }
  function Profit(n) {
    if (n == 0) {
      return 1;
    }
    if (n <= 0) {
      return 0;
    }
    return Profit(n - 4) + Profit(n - 8);
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
    12
    14
    16`);
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
