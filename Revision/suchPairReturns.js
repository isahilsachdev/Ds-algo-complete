function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 1; i < input.length; i += 2) {
    let k = input[i].trim().split(' ').map(Number)[1];
    let nums = input[i + 1].trim().split(' ').map(Number);
    let flag = false;
    console.log(nums, k);
    for (let j = 0; j < nums.length - 1; j++) {
      for (let m = j + 1; m < nums.length; m++) {
        if (nums[j] + nums[m] == k) {
          console.log(nums[j] + nums[m]);
          flag = true;
        }
      }
    }
    console.log(flag ? '1' : '-1');
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`1
  6 16
2 0 2 5 -3 0`);
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
