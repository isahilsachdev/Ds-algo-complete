function runProgram(input) {
  input = input.trim().split('\n');

  for (var i = 2; i < input.length; i = i + 2) {
    var nums = input[i].trim().split(' ').map(Number);

    function sumAgain(n) {
      if (n == 0) {
        return 0;
      } else {
        return Math.abs(nums[n] - nums[n - 1]) + sumAgain(n - 1);
      }
    }
    console.log(sumAgain(nums.length - 1));
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
    3
    1 5 2
    5
    3 5 6 1 8`);
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
