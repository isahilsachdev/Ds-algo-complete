function runProgram(input) {
  var obj = {};
  for (i in input) {
    if (input[i] in obj) {
      obj[input[i]]++;
    } else obj[input[i]] = 1;
  }
  var res = '';
  console.log(obj);
  for (i in obj) {
    res += i + obj[i];
  }
  //   method 2
  //   converting object into array
  //   obj = Object.entries(obj);
  //   for (let i in obj) {
  //     res += obj[i][0] + obj[i][1];
  //   }
  console.log(res);
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`aabbbc`);
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
