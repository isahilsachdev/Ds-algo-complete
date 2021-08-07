function runProgram(input) {
  var input = Number(input);
  var count = 0;
  for (var i = 2; i < input; i++) {
    if (input % i == 0) {
      count++;
      break;
    }
  }
  if (count == 1 || input == 1) {
    console.log('No');
  } else {
    console.log('Yes');
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`4`);
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
