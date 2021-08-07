function runProgram(input) {
  var count = 0;
  input = input.trim().split('');
  function strLength(str) {
    if (str[0] != null) {
      str.splice(0, 1); //or str.pop()
      count++;
      return strLength(str);
    } else {
      return count;
    }
  }
  console.log(strLength(input));
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`masaischool`);
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
