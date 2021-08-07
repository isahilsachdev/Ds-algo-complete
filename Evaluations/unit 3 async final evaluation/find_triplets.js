function runProgram(input) {
  input = input.split('\n');
  input.shift();
  input = input.map((i) => i.trim().split(' ').map(Number));

  for (i = 0; i < input.length; i = i + 1) {
    var sum = input[i][1];
    i++;
    var count = 0;

    for (var j = 0; j < input[i].length - 2; j++) {
      for (var k = j + 1; k < input[i].length; k++) {
        for (var l = k + 1; l < input[i].length; l++) {
          if (input[i][j] + input[i][k] - input[i][l] == sum) {
            count++;
          }
        }
      }
    }
    console.log(count);
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
  3 0
  1 2 3
  5 4
  3 2 3 1 5`);
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
// Array.prototype.top = function () {
//     return this[this.length-1]
// }
