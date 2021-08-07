function runProgram(input) {
  input = input.split('\n');
  var nums = input[1].trim().split(' ').map(Number);

  //   function for product
  // var product = (array) =>
  //   // let n = 0;
  //   array.length === 0 ? 1 : array[0] * product(array.slice(1));
  // console.log(product(nums));

  function product(n) {
    if (n === 0) {
      return 1;
    } else {
      return nums[n - 1] * product(n - 1);
    }
  }
  console.log(product(nums.length));
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`5
    2 2 3 4 2`);
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
