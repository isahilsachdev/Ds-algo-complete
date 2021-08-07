function runProgram(input) {
  input = input.trim().split('\n');
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 1; i < input.length; i++) {
    let str = input[i].trim().split('');
    // console.log(str);
    let vow = [];
    let con = [];
    for (let j = 0; j < str.length; j++) {
      if (vowels.includes(str[j])) {
        vow.push(str[j]);
      } else {
        con.push(str[j]);
      }
    }
    let res = vow.concat(con);
    console.log(res.join(''));
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`4
    eio
    masaischool
    ubcdefghioel
    rhythm`);
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
