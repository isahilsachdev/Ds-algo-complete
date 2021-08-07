function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 1; i < input.length; i += 2) {
    let p = input[i].trim().split('').sort();
    let s = input[i + 1].trim().split('').sort();
    let flag = true;
    p.length != s.length ? (flag = false) : null;
    p.map((a, i) => {
      if (a != s[i]) {
        flag = false;
      }
    });
    console.log(flag ? 'True' : 'False');
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
    abcd
    dcab
    aa
    aaa`);
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
