function runProgram(input) {
  input = input.split('\n');
  let nums = input[1].trim().split(' ').map(Number);

  let sum = 0;
  per([], nums);
  function per(combo, nums) {
    if (nums.length == 0) {
      let inSum = 0;
      for (let i = 0; i < combo.length; i = i + 2) {
        let pair = combo.slice(0, i + 2).sort((a, b) => a - b)[0][0];
        inSum += pair;
      }
      if (inSum > sum) {
        sum = inSum;
      }
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      temp = [...nums];
      sep = temp.splice(i, 1);
      per([...combo, sep], temp);
    }
  }
  console.log(sum);
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
  1 3 1 2`);
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
