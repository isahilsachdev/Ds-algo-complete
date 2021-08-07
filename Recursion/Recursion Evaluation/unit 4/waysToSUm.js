function runProgram(input) {
  input = input.split('\n');

  for (let i = 1; i < input.length; i++) {
    let sum = Number(input[i]);
    console.log(ways(0));
    function ways(n) {
      if (n == sum) {
        return 1;
      }
      if (n > sum) {
        return 0;
      }
      return ways(n + 1) + ways(n + 2) + ways(n + 5);
    }
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
    6
    2
    3`);
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
