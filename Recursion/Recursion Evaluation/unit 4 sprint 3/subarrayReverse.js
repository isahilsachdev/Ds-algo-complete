function runProgram(input) {
  input = input.split('\n');

  let nums = input[1].trim().split(' ').map(Number);
  //   console.log(nums.slice(0, 2));
  //   console.log(nums.reverse());
  let sortNums = nums.sort((a, b) => a - b);
  //   console.log(nums, sortNums);
  subArray(nums, 0, []);
  function subArray(array, index, sub) {
    if (array == sortNums) {
      return 1;
    }
    let pre = array.slice(0, index);
    console.log(pre);
    sub = array.slice(index, array.length);
    pre + subArray(array, index + 1, sub);
    sub.reverse();
    pre + subArray(array, index + 1, sub);
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`10
  -1 0 1 2 3 10 9 7 6 4`);
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
