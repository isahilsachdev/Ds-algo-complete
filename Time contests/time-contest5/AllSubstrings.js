function runProgram(input) {
  input = input.trim().split('\n');
  //   input = input[1].trim();
  for (let i = 2; i < input.length; i += 2) {
    let str = input[i].trim().split('');
    // console.log(str);
    for (let j = 0; j < str.length; j++) {
      //   console.log(str[j]);
      for (let k = j; k < str.length; k++) {
        console.log(str.slice(j, k + 1).join(''));
      }
    }
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`1
  4 
  aman`);
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
