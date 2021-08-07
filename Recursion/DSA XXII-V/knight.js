function runProgram(input) {
  input = input.trim().split(' ').map(Number);

  var arr = new Array(11).fill(0).map((a) => new Array(11).fill(0));
  // console.log(arr);
  var count = 0;
  knight(input[0], input[1], input[2]);

  function knight(r, c, n) {
    if (r > 10 || c > 10 || r < 1 || c < 1) {
      return;
    }
    if (n == 0 && arr[r][c] == 1) {
      return;
    }
    if (n == 0) {
      arr[r][c] = 1;
      count++;
    } else {
      knight(r + 2, c + 1, n - 1);
      knight(r + 2, c - 1, n - 1);
      knight(r - 2, c + 1, n - 1);
      knight(r - 2, c - 1, n - 1);
      knight(r + 1, c + 2, n - 1);
      knight(r + 1, c - 2, n - 1);
      knight(r - 1, c + 2, n - 1);
      knight(r - 1, c - 2, n - 1);
    }
  }
  console.log(count);
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`1 1 1`);
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
