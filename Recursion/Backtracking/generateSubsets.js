function runProgram(input) {
  subset(input, 0, []);

  function subset(original, index, soFar) {
    if (index === original.length) {
      return;
    }
    soFar.push(original[index]);
    console.log(soFar.join(''));
    subset(original, index + 1, soFar);
    soFar.pop();
    subset(original, index + 1, soFar);
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`123`);
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
