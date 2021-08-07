function runProgram(input) {
  var input = input.trim().split('');
  var alp = [
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];
  var inp = input.map((a) => a.toLowerCase()).filter((a) => alp.includes(a));
  var inp2 = [...inp];

  inp = inp.reverse();
  JSON.stringify(inp) == JSON.stringify(inp2) ? console.log('YES') : console.log('NO');
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`hhhh`);
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
