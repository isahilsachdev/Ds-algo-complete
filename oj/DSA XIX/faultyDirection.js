function runProgram(input) {
  input = input.trim().split('\n');

  for (var i = 2; i <= input.length; i = i + 2) {
    var dir = input[i].trim().split('');
    var x = 0;
    var y = 0;

    for (var j = 0; j < dir.length; j++) {
      if (dir[j] === 'R') {
        x++;
      } else if (dir[j] === 'L') {
        x--;
      } else if (dir[j] === 'U') {
        y++;
      } else {
        y--;
      }
    }

    x == 0 && y == 0 ? console.log('Yes') : console.log('No');
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
  5
  RLRUD
  4
  LRUD`);
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
