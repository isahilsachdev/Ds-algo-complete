function runProgram(input) {
  let count = +input;

  // first way!!
  function ways1(step) {
    if (step == count) return 1;

    if (step > count) return 0;

    return ways1(step + 1) + ways1(step + 2) + ways1(step + 3);
  }
  console.log(ways1(0));

  // Second way!!
  function ways(step) {
    if (step == 1) return 1;
    if (step == 2) return 2;
    if (step == 3) return 4;

    return ways(step - 1) + ways(step - 2) + ways(step - 3);
  }
  console.log(ways(count));
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`4`);
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
