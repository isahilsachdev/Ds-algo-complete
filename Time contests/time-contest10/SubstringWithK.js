function runProgram(input) {
  input = input.trim().split('\n');
  k = input[0].trim().split(' ').map(Number)[1];
  str = input[1].trim().split('');
  count = 0;
  res = [];
  for (let i = 0; i < str.length; i++) {
    sub = str.slice(i, i + k);
    sub.length == k && res.push(sub);
  }
  console.log(res);
  for (let i = 0; i < res.length; i++) {
    obj = {};

    for (key in res[i]) {
      obj[res[i][key]] = 1;
    }
    Object.keys(obj).length == k && count++;
  }
  console.log(count);
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`4 2
    abccddeef`);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
  });

  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
