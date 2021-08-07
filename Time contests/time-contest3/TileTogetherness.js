function runProgram(input) {
  input = input.trim().split(' ');

  console.log(Tile(input[0], input[1]));
  function Tile(n, m) {
    n = n.toString();
    m = m.toString();
    if (n === m) {
      return m;
    }
    if (n > m) {
      return -1;
    }
    let sum = 0;
    let str = n.split('').map((a) => (sum = sum + Number(a)));
    // console.log(Number(n) + sum, m);
    return Tile(Number(n) + sum, m);
  }
}
// let sum2 = 0;
// let str2 = m.split('').map((a) => (sum2 = sum2 + Number(a)));

if (process.env.USERNAME === 'ASUS') {
  runProgram(`32 79`);
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
