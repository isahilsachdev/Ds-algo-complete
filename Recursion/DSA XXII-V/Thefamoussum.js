function runProgram(input) {
  input = input.trim().split(' ');
  var n = input[0];
  var k = input[1];
  var str = '';
  for (let i = 0; i < k; i++) {
    str += n;
  }
  // console.log(str);
  function FamousSum(str) {
    str = str.toString().split('');
    // console.log(str);
    if (str.length > 1) {
      var count = 0;
      str = str.map((i) => (count += Number(i)));
      return FamousSum(count);
    } else console.log(Number(str));
  }
  FamousSum(str);
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(
    `3546630947312051453014172159647935984478824945973141333062252613718025688716704470547449723886626736 100000`
  );
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
