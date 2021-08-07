function runProgram(input) {
  input = input.split('\n');
  input[0] = input[0].trim().split(' ').map(Number);
  let nums = input[1].trim().split(' ').map(Number);
  let packageSize = input[0][0];

  let count = 0;
  //calling
  Deliver(packageSize, 0);

  function Deliver(total, current) {
    if (current == total) {
      count++;
      return;
    }
    if (current > total) {
      return;
    }
    nums.map((i) => {
      return Deliver(total, current + i);
    });
  }
  console.log(count);
}
let arr = [0, 1, 2, 3, 4, 5, 6, 6, 67];
arr = arr.slice(2);
console.log(arr);

if (process.env.USERNAME === 'ASUS') {
  runProgram(`3 3
1 2 3`);
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
