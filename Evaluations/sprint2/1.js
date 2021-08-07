function runProgram(input) {
  var input = input.split(/[\r\n]+/);
  var first = Number(input[0]);
  var sec = input[1].split('');
  console.log(sec);

  for (var i = 0; i < sec.length; i++) {
    // if (sec[i] == '@') {
    //   first = first * 10;
    // }
    // if (sec[i] == '!') {
    //   first = first + 2;
    // }
    // if (sec[i] == '%') {
    //   first = first - 5;
    // }
    // if (sec[i] == '^') {
    //   first = first * first;
    // }
    // if (sec[i] == '$') {
    //   first = first + 37;
    // }
    switch (sec[i]) {
      case '@': {
        first = first * 10;
        break;
      }
      case '!': {
        first = first + 2;
        break;
      }
      case '%': {
        first = first - 5;
        break;
      }
      case '^': {
        first = first ** 2;
        break;
      }
      case '$': {
        first = first + 37;
        break;
      }
    }
  }
  console.log(first);
}
// runProgram(`2
// @!$@^`);
process.stdin.resume();
process.stdin.setEncoding('ascii');
let read = '';
process.stdin.on('data', function (input) {
  read += input;
});
process.stdin.on('end', function () {
  read = read.replace(/\n$/, '');
  runProgram(read);
});

process.on('SIGINT', function () {
  read = read.replace(/\n$/, '');
  runProgram(read);
  process.exit(0);
});
