function runProgram(input) {
  input = input.trim().split('\n');
  for (let i = 2; i < input.length; i += 2) {
    ans = '';
    nums = input[i].trim().split(' ').map(Number);
    maxCount = 0;

    for (let j = 0; j < nums.length; j++) {
      obj = {};
      count = 0;

      for (let k = j; k < nums.length; k++) {
        if (obj[nums[k]] == undefined) {
          obj[nums[k]] = 1;
          count++;
        }
        if (count > maxCount) {
          maxCount = count;
        }
      }
    }
    console.log(maxCount);
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
5
1 2 1 3 4
`);
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
