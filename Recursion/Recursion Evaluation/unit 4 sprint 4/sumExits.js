  function runProgram(input) {
    input = input.split('\n');
    let nums = input[1].trim().split(' ').map(Number);
    let sum = Number(input[2]);
    let sofar = [];
    let flag = false;
    function canSum(nums, index, sofar) {
      if (index == nums.length) {
        return;
      }
      sofar.push(nums[index]);
      const summing = sofar.reduce((a, i) => {
        return a + i;
      });
      summing == sum ? (flag = true) : null;
      canSum(nums, index + 1, sofar);
      sofar.pop();
      canSum(nums, index + 1, sofar);
    }
    canSum(nums, 0, sofar);
    flag ? console.log('yes') : console.log('no');
  }

  // time complexity for this code will be O(2^n) coz for each call we have
  // 2 options either to include it or not include it and it will n times so

  if (process.env.USERNAME === 'ASUS') {
    runProgram(`9
      1 2 3
      5`);
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
