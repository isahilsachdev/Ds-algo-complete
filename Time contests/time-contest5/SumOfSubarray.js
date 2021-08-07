function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 1; i < input.length; i += 2) {
    let req = +input[i].trim().split(' ')[1];
    let nums = input[i + 1].trim().split(' ').map(Number);

    let count = 0;
    for (let j = 0; j < nums.length; j++) {
      let k = 0,
        sum = 0;

      while (sum + nums[k] < req) {
        sum += nums[k];
        console.log(nums[k] + sum);
        count++;
        k++;
      }
    }
    console.log(count);
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`1
    5 5
    1 5 1 3 2 `);
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
