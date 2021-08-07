function runProgram(input) {
  input = input.split('\n');

  for (var i = 1; i < input.length; i = i + 3) {
    var boys = input[i + 1]
      .trim()
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);
    var girls = input[i + 2]
      .trim()
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);

    if (boys.length > girls.length) {
      console.log('NO');
      continue;
    }
    let flag = true;
    for (let j = 0, k = 0; j < boys.length && k < girls.length; ) {
      if (boys[j] > girls[k]) {
        j++;
        k++;
      } else {
        flag = false;
        break;
      }
    }
    console.log(flag ? 'YES' : 'NO');
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`1
  3 3
  22 117 119
  96 48 127`);
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
