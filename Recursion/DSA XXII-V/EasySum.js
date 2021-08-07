function runProgram(input) {
  input = input.trim().split('\n');

  for (var i = 2; i < input.length; i += 2) {
    var nums = input[i].trim().split(' ').map(Number);
    function Sum(n) {
      if (n == 0) {
        return 0;
      } else {
        return nums[n - 1] + Sum(n - 1);
      }
    }
    console.log(Sum(nums.length));
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
    5
    6 3 8 2 -4
    5
    -10 -7 10 2 -2
    5
    -4 -5 6 -3 9`);
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
