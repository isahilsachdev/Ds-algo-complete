//  we have to find a longest subarray with sun not equal to key

function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 1; i < input.length; i++) {
    num = Number(input[i]);
    console.log(Math.floor(num ** 0.5));
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
  4
  8`);
} else {
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
}
