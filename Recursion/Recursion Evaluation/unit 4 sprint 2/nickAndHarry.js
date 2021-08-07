function runProgram(input) {
  input = input.trim().split('\n');
  //   console.log(input);

  function Rupee(start, need) {
    if (start == need) {
      return true;
    }
    if (start > need) {
      return false;
    }
    if (Rupee(start * 10, need)) {
      return true;
    }
    if (Rupee(start * 20, need)) {
      return true;
    }
  }
  for (var i = 1; i < input.length; i++) {
    var nums = Number(input[i].trim());
    if (Rupee(1, input[i])) {
      console.log('Yes');
    } else console.log('No');
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`5
  1
  2
  10
  25
  200`);
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
