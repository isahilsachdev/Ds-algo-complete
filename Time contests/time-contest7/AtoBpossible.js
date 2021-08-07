function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 1; i < input.length; i++) {
    let n = input[i].trim().split(' ').map(Number)[0];
    let k = input[i].trim().split(' ').map(Number)[1];
    // console.log(n, k, typeof n);
    console.log(Possible(n, k) ? 'Possible' : 'Not Possible');
  }

  function Possible(n, k) {
    n = Number(n);
    if (n == k) {
      return true;
    }
    if (n > k) {
      return false;
    }
    return Possible(n * 2, k) + Possible(String(n) + 1, k);
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`4
  6 242
  3 3
  6 3
  10 30
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
// a = 3;
// console.log(typeof a);
// console.log(String(a) + 2);
// console.log(typeof a);
