function runProgram(input) {
  input = input.trim().split('\n');
  let nums = input[1].trim().split(' ');

  Permutation(nums, []);
  function Permutation(nums, part) {
    if (nums.length == 0) {
      console.log(part.join(''));
      return;
    }
    for (i in nums) {
      temp = [...nums];
      sep = temp.splice(i, 1);
      // console.log('temp', temp, 'part', [...part, sep]);
      Permutation(temp, [...part, sep]);
    }
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
    ab cd ef`);
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
