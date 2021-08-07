function runProgram(input) {
  let alp = 'abcdefghijklmnopqrstuvwxyz';
  let res = [];
  let obj = {};
  for (let i = 0; i < alp.length; i++) {
    obj[alp[i]] = i;
  }
  //   console.log(obj);
  for (let i = 0; i < input.length; i++) {
    sq = obj[input[i]] ** 2 % 26;
    // console.log(sq);
    for (key in obj) {
      obj[key] == sq && res.push(key);
    }
  }
  console.log(res.join(''));
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`ilnargjmnu`);
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
