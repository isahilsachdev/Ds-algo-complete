function runProgram(input) {
  input = input.trim().split('\n');
  let nums = input[1].trim().split(' ').map(Number);
  let count = 0;
  subset(nums, 0, []);

  function subset(original, index, soFar) {
    if (index === original.length) {
      return;
    }
    soFar.push(original[index]);
    let sum = 0;
    soFar.map((a) => (sum += a));
    if (sum % 2 == 1 || sum % 2 == -1) {
      count++;
    }
    subset(original, index + 1, soFar);
    soFar.pop();
    subset(original, index + 1, soFar);
  }
  console.log(count);
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`7
  -3 -1 -10 8 -5 0 7 `);
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

// let a = ['a', 'abc', 'abc', 'c', 'c'];
// let c = [...new Set(a)];
// console.log(c);
