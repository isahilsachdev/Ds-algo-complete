function runProgram(input) {
  input = input.trim().split('\n');
  for (var i = 2; i < input.length; i += 2) {
    let str = input[i]
      .trim()
      .split(' ')
      .map((a) => a.split('').map(Number));
    let maxCount = 0;
    let maxElem = null;
    let res = [];
    for (let i = 0; i < str.length; i++) {
      let count = 0;
      for (j in str[i]) {
        if (str[i][j] == 2) {
          count++;
        }
      }
      if (maxCount == 0 && count > maxCount) {
        maxCount = count;
        res.push(str[i].join(''));
      }
      if (count > maxCount) {
        maxElem = str[i].join('');
        maxCount = count;
        res = [];
      } else if (count == maxCount && count > 0) {
        res.push(str[i].join(''));
      }
    }
    if (maxCount == 0) {
      console.log(-1);
    }
    if (res.length > 0) {
      let max = null;
      res.map((a) => {
        if (Number(a) > max) {
          max = Number(a);
        }
      });
      console.log(max);
    } else console.log(Number(maxElem));
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
    5 2
    222 2221 12221 2222 12
    5 2
    222 2221 12221 2212 12`);
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
