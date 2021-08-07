function runProgram(input) {
  input = input.trim().split('\n');
  for (let i = 2; i < input.length; i += 2) {
    nums = input[i].trim().split(' ').map(Number);

    var obj = {};
    var ans = 0;
    var count = 0;
    // for (let j = 0; j < nums.length; j++) {
    //   for (k = j; k < nums.length; k++) {
    //     if (obj[nums[k]]) {
    //       if (count > ans) {
    //         ans = count;
    //       }
    //       count = 0;
    //       obj = {};
    //       break;
    //     } else {
    //       count++;
    //       obj[nums[k]] = 1;
    //     }
    //   }
    // }
    j = 0;
    k = 0;
    while (j < nums.length) {
      k = j;
      while (k < nums.length && !obj[nums[k]]) {
        count++;
        obj[nums[k]] = 1;
        k++;
      }

      if (count > ans) {
        ans = count;
      }
      j++;
      count = 0;
      obj = {};
    }
    console.log(ans);
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
    8
    1 2 1 3 2 7 4 2
    5
    1 2 1 3 4 8 9 2 1 2 3 4 5 6 9 7 2 2 1 1
    4
    1 2 2 1
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
