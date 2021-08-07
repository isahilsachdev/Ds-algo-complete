function runProgram(input) {
  input = input.trim().split('\n');
  for (let i = 2; i < input.length; i += 2) {
    var ans = '';
    var repeat = null;
    var missing = null;
    nums = input[i].trim().split(' ').map(Number);

    // var j = 1;
    // while (nums[j - 1] == j) {
    //   j++;
    // }
    // ans += j;
    // j = 0;
    // while (j < nums.length - 1) {
    //   if (nums[j] == nums[j + 1]) {
    //     ans += ' ' + nums[j];
    //   }
    //   j++;
    // }
    var obj = {};

    for (let j = 0; j < nums.length; j++) {
      if (nums[j] != j + 1) {
        missing = j + 1;
      }
      if (obj[nums[j]]) {
        obj[nums[j]]++;
      } else obj[nums[j]] = 1;
    }

    for (keys in obj) {
      if (obj[keys] == 2) {
        repeat = keys;
      }
    }
    console.log(missing + ' ' + repeat);
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
  5
  1 2 3 4 5 6 7 8 9 11 11
  2
  1 1
  3
  1 2 2
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
