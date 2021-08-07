function runProgram(input) {
  input = input.trim().split('\n');
  let inputs = input[0].split(' ').map(Number);
  let k = inputs[1] % inputs[0];
  let nums = input[1].trim().split(' ').map(Number);
  let res = [];
  let res1 = nums.slice(k, nums.length);
  let res2 = nums.slice(0, k);
  console.log(res1.join(' ') + ' ' + res2.join(' '));
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`8 62
  2 1 6 4 3 3 6 3`);
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
