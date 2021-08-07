function runProgram(input) {
  input = input.trim().split('\n');

  var input1 = input[1].trim().split(' ').map(Number);
  var input2 = input[2].trim().split(' ').map(Number);

  var flag = true;

  input1.map((a, i) => (input2[i] > a ? (flag = false) : null));
  flag ? console.log('Yes') : console.log('No');
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`5
  328 248 689 200 101
  100 328 248 689 201`);
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
