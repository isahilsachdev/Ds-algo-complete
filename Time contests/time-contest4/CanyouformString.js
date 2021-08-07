function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 1; i < input.length; i += 2) {
    let x = input[i].trim().split('');
    let y = input[i + 1].trim().split('');

    let objX = {};
    for (let j = 0; j < x.length; j++) {
      objX[x[j]] = 1;
    }

    let objY = {};
    for (let j = 0; j < y.length; j++) {
      objY[y[j]] = 1;
    }

    let flag = true;
    for (key in objY) {
      if (objX[key] == undefined) {
        flag = false;
      }
    }
    console.log(flag == true ? 'Yes' : 'No');
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
    aac
    aaabab
    abcdef
    abcdef
    abcxyz
    abcxyababcxyzcxyzzabcxyz`);
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
