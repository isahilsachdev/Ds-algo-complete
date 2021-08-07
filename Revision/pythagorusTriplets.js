function runProgram(input) {
  input = input.trim().split('\n');
  let arr = input[1]
    .trim()
    .split(' ')
    .map(Number)
    .sort((a, b) => a - b);
  // console.log(arr);
  flag = true;

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        let x = arr[i] ** 2,
          y = arr[j] ** 2,
          z = arr[k] ** 2;

        if (x + y == z) {
          flag = false;
          console.log(x, y, z);
        }
      }
    }
  }
  flag && console.log(-1);
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`8
  1 2 3 4 5 6 8 10`);
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
