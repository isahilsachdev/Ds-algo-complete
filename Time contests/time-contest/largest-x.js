function runProgram(input) {
  input = input.trim().split('\n');

  for (var i = 2; i < input.length; i += 2) {
    var nums = input[i]
      .trim()
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);
    // console.log(nums);
    let nums2 = nums.filter((a) => a < 0);
    // console.log(nums2);
    let flag = true;
    for (let j = 0; j < nums2.length; j++) {
      if (nums.includes(Math.abs(nums2[j]))) {
        console.log(Math.abs(nums2[j]));
        flag = false;
        break;
      }
    }
    flag ? console.log(-1) : null;
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
    5
    2 1 -6 -4 3
    6
    -3 2 -4 4 -2`);
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
