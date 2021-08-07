function runProgram(input) {
  input = input.split('\n');
  for (let i = 2; i < input.length; i = i + 3) {
    let boys = input[i]
      .trim()
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);
    let girls = input[i + 1]
      .trim()
      .split(' ')
      .map(Number)
      .sort((a, b) => a - b);

    // console.log(boys, girls);
    let flag = true;
    if (boys.length > girls.length) {
      console.log('NO');
      continue;
    }
    for (let j = 0; j < boys.length; j++) {
      if (boys[j] <= girls[j]) {
        flag = false;
        break;
      }
    }
    console.log(flag ? 'YES' : 'NO');
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
    4 5
    2 5 6 8
    3 8 5 1 7
    4 5
    2 5 6 8 3
    3 7 2 1 5
    4 5
    2 5 6 8 3
    3 7 2 1 5
    4 5
    2 5 6 8 3
    3 7 2 1 5
    4 5
    2 5 6 8 3
    3 7 2 1 5`);
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
