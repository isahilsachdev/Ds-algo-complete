function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 2; i < input.length; i += 2) {
    let obj = {};
    let arr = input[i].trim().split(' ').map(Number);
    let flag = false;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] in obj) {
        flag = true;
      } else obj[arr[j]] = 1;
    }
    console.log(flag ? 'YES' : 'NO');
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
  1
  1
  2
  1 1
  3
  1 2 3`);
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
