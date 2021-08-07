const runProgram = (input) => {
  input = input.trim().split('\n');
  let testCase = +input[0];
  let currentLine = 1;
  while (testCase--) {
    let length = input[currentLine].trim().split(' ').map(Number)[0];
    let req = input[currentLine].trim().split(' ').map(Number)[1];
    currentLine++;
    let arr = input[currentLine].trim().split(' ').map(Number);
    let count = 0;
    let s = 0,
      e = 0,
      sum = arr[0];
    while (s < length && e < length) {
      if (sum < req) {
        e++;
        if (e >= s) {
          count += e - s;
        }
        if (e < length) {
          sum += arr[e];
        }
      } else {
        sum -= arr[s];
        s++;
      }
    }
    console.log(count);
    currentLine++;
  }
};
if (process.env.USERNAME === 'ASUS') {
  runProgram(`1
      5 5
      1 5 1 3 2`);
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
