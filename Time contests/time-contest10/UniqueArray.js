function runProgram(input) {
  input = input.trim().split('\n');
  nums = input[1].trim().split(' ').map(Number);
  let obj = {};
  for (key in nums) {
    obj[nums[key]] = 1;
  }
  console.log(Object.keys(obj).join(' '));
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`5
    2 2 2 7 9`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
  });

  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
