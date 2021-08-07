function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 1; i < input.length; i++) {
    nums = input[i];
    nums2 = nums.trim().split('').map(Number).reverse();
    nums2 = nums2.join('');
    nums = Number(nums);
    nums2 = Number(nums2);
    // console.log(nums, nums2);
    count = 0;
    count2 = 0;
    flag = 0;
    for (let j = 1; j < nums; j++) {
      if (nums % j == 0) {
        if (count == 1) {
          flag++;
          break;
        }
        count++;
      }
    }
    if (nums2 == 1) {
      flag++;
    }
    for (let j = 1; j < nums2; j++) {
      if (nums2 % j == 0) {
        if (count2 == 1) {
          flag++;
          break;
        }
        count2++;
      }
    }
    console.log(flag == 0 ? 'Yes' : 'No');
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
  151
  10
  23`);
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
