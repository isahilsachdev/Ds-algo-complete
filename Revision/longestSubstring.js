function runProgram(input) {
  var subRes = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i; j <= input.length; j++) {
      var sub = input.slice(i, j);
      if (sub[0] === sub[sub.length - 1]) {
        subRes.push(sub);
      }
    }
  }
  let max = 0;
  let ans = null;
  for (let i = 0; i < subRes.length; i++) {
    let j = 0;
    let k = subRes[i].length - 1;
    let count = 0;
    while (j <= k && subRes[i][j] === subRes[i][k]) {
      count++;
      j++;
      k--;
    }
    if (count > max) {
      max = count;
      ans = subRes[i].length;
    }
  }
  console.log(ans);
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`thisracecarisgood`);
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
