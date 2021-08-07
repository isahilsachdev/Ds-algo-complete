function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 1; i < input.length; i++) {
    num = Number(input[i]);
    lo = i;
    hi = num;
    ans = null;
    while (lo <= hi) {
      mid = lo + Math.floor((hi - lo) / 2);
      if (num % mid == 0 && mid % 2 == 1) {
        ans = mid;
        low = mid + 1;
      }
    }
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
  10
  4
  16`);
  // function runProgram(input) {
  //   input = input.trim().split('\n');

  //   for (let i = 1; i < input.length; i++) {
  //     num = Number(input[i]);
  //     let ans = null;
  //     for (let j = 1; j <= num; j += 2) {
  //       if (num % j == 0 && j % 2 == 1) {
  //         ans = j;
  //       }
  //     }
  //     console.log(ans);
  //   }
  // }

  // if (process.env.USERNAME === 'ASUS') {
  //   runProgram(`2
  // 10
  // 4
  // 16`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
  });

  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
