function runProgram(input) {
  input = input.split('\n');
  let nums = input[1].trim().split(' ').map(Number);
  let sofar = [];
  let count = 0;
  oddSubset(nums, 0, sofar);
  function oddSubset(array, index, sofar) {
    if (index == array.length) {
      return;
    }
    sofar.push(array[index]);
    // to find sum and check odd
    let sum = 0;
    sofar.map((a) => (sum += a));
    sum % 2 == 1 || sum % 2 == -1 ? count++ : null;

    oddSubset(array, index + 1, sofar);
    sofar.pop();
    oddSubset(array, index + 1, sofar);
  }
  console.log(count);
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`7
  -3 -1 -10 8 -5 0 7 
  `);
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
