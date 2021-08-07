function runProgram(input) {
  input = input.trim().split('\n');

  for (var i = 1; i < input.length; i++) {
    let count = 0;
    let num = Number(input[i]);
    for (var j = 2; j < num; j++) {
      if (num % j == 0) {
        count++;
        break;
      }
    }
    console.log(count >= 1 || num == 1 ? 'No' : 'Yes');
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`4
    1
    2
    3
    4`);
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
