function runProgram(input) {
  input = input.trim().split('\n');
  for (let i = 1; i < input.length; i++) {
    let num = Number(input[i]);
    let countEven = 0;
    let countOdd = 1;

    for (let j = 2; j <= num; j++) {
      if (num % j == 0) {
        if (j % 2 == 0) {
          countEven++;
        } else {
          countOdd++;
        }
      }
    }
    if (countEven > countOdd) {
      console.log('Even Skewed');
    } else if (countEven < countOdd) {
      console.log('Odd Skewed');
    } else {
      console.log('Not Skewed');
    }
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
  4
  6
  11`);
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
