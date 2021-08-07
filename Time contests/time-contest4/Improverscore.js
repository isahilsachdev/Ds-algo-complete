function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 1; i < input.length; i += 2) {
    let sumReq = input[i].trim().split(' ').map(Number)[1];
    let nums = input[i + 1].trim().split(' ').map(Number);
    let sum = 0;
    for (let j = 0; j < nums.length; j++) {
      sum += nums[j];
    }
    console.log(sum > sumReq ? sumReq : sum);
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`10
  6 4
  1 2 3 0 0 0
  5 7
  2 3 4 5 6
  4 8
  1 2 4 7
  1 5
  2
  3 6
  5 1 2
  2 2
  1 1
  5 2
  1 2 0 0 0
  8 9
  1 2 3 4 5 6 7 8
  5 3
  2 1 3 0 0
  1 8
  6
  4 6
  2 3 1 4`);
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
