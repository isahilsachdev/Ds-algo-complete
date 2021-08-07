function runProgram(input) {
  input = input.split('\n');

  for (var i = 1; i < input.length; i++) {
    var alpha = input[i].trim().split('');
    const que = [];
    const res = [];
    const occur = [];
    console.log(alpha);
    for (var j = 0; j < alpha.length; j++) {
      if (j === 0) {
        que.push(alpha[j]);
        res.push(que[0]);
      }
      // WRONG ANSWER
      if (res.includes(alpha[j])) {
        if (que.includes(alpha[j])) {
          que.splice(0, 1);
          console.log(que);
          res.push(que[0]);
        } else {
          res.push(que[0]);
        }
      } else if (!res.includes(alpha[j])) {
        que.push(alpha[j]);
        res.push(que[0]);
      }
      if (que.length === 0) {
        res.push('#');
      }
    }
    console.log(res.join(''));
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`4
  abadbc
  abcabc
  abadbcdefab
  abcabcabcabc`);
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
