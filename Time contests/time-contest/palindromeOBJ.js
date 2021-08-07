function runProgram(input) {
  input = input.trim().split('\n');
  for (var i = 2; i < input.length; i += 2) {
    var obj = {};
    var count = 0;
    let nums = input[i]
      .trim()
      .split('')
      .sort((a, b) => a - b);

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] in obj) {
        obj[nums[j]]++;
      } else obj[nums[j]] = 1;
    }
    for (j in obj) {
      if (obj[j] % 2 == 1) {
        count++;
      }
    }
    // console.log(obj);
    console.log(count > 1 ? 'Not Possible!' : 'Possible!');
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2;
      6;
      aabbcc
      5;
      aabcdcccdefef
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
