function runProgram(input) {
  vowels = {};
  count = 0;
  for (var i = 0; i < input.length; i++) {
    if (
      input[i] == 'a' ||
      input[i] == 'i' ||
      input[i] == 'o' ||
      input[i] == 'u'
    ) {
      vowels[input[i]] = 1;
    }
  }

  for (var i = 0; i < input.length; i++) {
    str = null;
    console.log('object');
    for (var j = i; j <= input.length; j++) {
      str = input.slice(i, j).split('');

      console.log(str);
      flag = true;
      for (key in vowels) {
        if (!str.includes(key)) {
          flag = false;
        }
      }
      flag && count++;
      console.log(count);
    }
  }
  console.log(count);
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`pandemicsituation`);
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
