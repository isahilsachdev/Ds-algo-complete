function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 2; i < input.length; i += 2) {
    nums = input[i].trim().split(' ');
    i = 0;
    j = nums.length - 1;
    count1 = 0;
    count2 = 0;
    while (i <= j) {
      //   console.log(count1, count2);
      if (i == j) {
        count1++;
        i++;
      } else if (count1 % 2 == 0) {
        count1++;
        count2++;
        i++;
        j--;
      } else {
        count1++;
        i++;
      }
    }
    console.log(count1, count2);
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`1
        5
        2 9 8 2 4 3 3 3 `);
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
