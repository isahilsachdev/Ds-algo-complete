function runProgram(input) {
  input = input.trim().split('\n');
  for (let i = 1; i < input.length; i += 2) {
    let k = input[i].trim().split(' ').map(Number)[1];
    let nums = input[i + 1].trim().split(' ').map(Number);
    let flag = false;
    let obj = {};
    console.log(nums);
    for (let j = 0; j < nums.length; j++) {
      obj[nums[j]] = 1;
    }
    console.log(obj);
    for (let j = 0; j < nums.length; j++) {
      if (obj[k - nums[j]] != undefined) {
        flag = true;
      }
    }
    console.log(flag ? '1' : '-1');
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
  7 -10
  2 -5 6 -1 5 -1 6
  6 0
5 -6 5 5 3 0
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
