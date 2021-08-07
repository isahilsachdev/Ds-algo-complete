function runProgram(input) {
  input = input.trim().split('\n');
  let obj = {};
  let arr = input[1].trim().split(' ').map(Number);
  let query = input[3].trim().split(' ').map(Number);

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i]] = 1;
  }
  for (let i = 0; i < query.length; i++) {
    console.log(query[i] in obj ? 'YES' : 'NO');
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`5
  1 2 3 4 5
  3
  3 5 7`);
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
