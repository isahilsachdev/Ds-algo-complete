function runProgram(input) {
  var nums = input.trim().split('\n');

  const reverse = (nums, index) => {
    if (index == 0) {
      return;
    }
    console.log(nums[index - 1]);
    return reverse(nums, index - 1);
  };
  reverse(nums, nums.length - 1);
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`1
2
3
4
-1`);
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
