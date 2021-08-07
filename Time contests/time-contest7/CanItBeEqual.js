function runProgram(input) {
  input = input.trim().split('\n');
  for (var i = 2; i < input.length; i += 3) {
    let str1 = input[i].trim().split('').sort();
    let str2 = input[i + 1].trim().split('').sort();
    // console.log(str1, str2);
    flag = true;
    str1.map((a, i) => {
      if (a != str2[i]) {
        flag = false;
      }
    });
    console.log(flag ? 'Yes' : 'No');
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
  2
  ab
  ac
  3
  aba
  aab`);
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
