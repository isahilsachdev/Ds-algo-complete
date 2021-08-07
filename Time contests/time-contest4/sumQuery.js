function runProgram(input) {
  input = input.trim().split('\n');
  let arr = input[1].trim().split(' ').map(Number);
  for (let i = 3; i < input.length; i++) {
    let queries = input[i].trim().split(' ').map(Number);
    let left = queries[0];
    let right = queries[1];
    let sum = 0;
    const res = arr.slice(left - 1, right).map((a) => (sum += a));
    console.log(sum);
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`4
    3 2 1 5
    4
    1 3
    2 4
    1 4
    3 3`);
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
