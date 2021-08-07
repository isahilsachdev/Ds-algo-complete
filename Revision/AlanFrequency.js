function runProgram(input) {
  input = input.trim().split('\n');
  let str = input[1].trim().split('');
  let obj = {};
  let alpha = 'abcdefghijklmnopqrstuvwxyz';
  for (let i = 0; i < str.length; i++) {
    if (str[i] in obj) {
      obj[str[i]]++;
    } else obj[str[i]] = 1;
  }
  for (let i = 0; i < alpha.length; i++) {
    if (alpha[i] in obj) {
      console.log(`${alpha[i]}-${obj[alpha[i]]}`);
    }
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`4
    maan`);
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
