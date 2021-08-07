function runProgram(input) {
  input = input.trim().split('\n');
  for (var i = 2; i < input.length; i += 2) {
    let nums = input[i].trim().split(' ').map(Number);
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
      if (obj[nums[i]] == undefined) {
        obj[nums[i]] = 1;
      } else obj[nums[i]]++;
    }
    let keys = null;
    let miss = null;
    for (let key = 1; key <= nums.length; key++) {
      if (obj[key] == 2) {
        keys = key;
      }
      if (obj[key] == undefined) {
        miss = key;
      }
    }

    console.log(miss, keys);
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
    5
    1 2 3 3 4
    2
    1 1
    3
    1 2 2`);
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
