function runProgram(input) {
  input = +input;
  amt = input - 80;
  ans = 0;
  if (amt >= 650) {
    amt = amt - 650;
    ans += 150;
    ans += amt / 10;
  } else {
    if (amt >= 150) {
      amt = amt - 150;
      ans += 50;
      ans += amt / 5;
    } else ans += amt / 3;
  }
  console.log(ans);
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`140`);
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
