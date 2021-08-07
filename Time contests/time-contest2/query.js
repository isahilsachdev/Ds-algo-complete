function runProgram(input) {
  input = input.trim().split('\n');
  let nums = input[1].trim().split(' ').map(Number);
  let queries = input[3].trim().split(' ').map(Number);

  for (let i = 0; i < queries.length; i++) {
    console.log(nums.includes(queries[i]) ? 'YES' : 'NO');
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`5
  1 2 3 4 5
  3
  3 5 7 2 4 5 7 1`);
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
