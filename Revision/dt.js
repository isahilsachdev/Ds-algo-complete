function runProgram(input) {
  for (i in input) {
    if(i=="a"||i=="e")
  }
  for (let i = 0; i < input.length; i++) {
    string = [];
    for (let j = i; j < input.length; j++) {
      str.push(input[j]);
      // if()
    }
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`dangerouscovid`);
  runProgram(`aman`);
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
