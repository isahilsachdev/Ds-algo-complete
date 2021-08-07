function runProgram(input) {
  input = input.split('\n');

  for (i = 1; i < input.length; i++) {
    let nums = Number(input[i]);
    function Deliver(total, current) {
      if (current == total) {
        return 1;
      }
      if (current > total) {
        return 0;
      }
      return Deliver(total, current + 4) + Deliver(total, current + 8);
    }
    console.log(Deliver(nums, 0));
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`1
  12`);
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
