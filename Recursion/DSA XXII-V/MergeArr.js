function runProgram(input) {
  input = input.split('\n');
  var arr1 = input[1].trim().split(' ').map(Number);
  var arr2 = input[2].trim().split(' ').map(Number);
  var arr3 = arr1.concat(arr2);

  for (var i = 0; i < arr3.length; i++) {
    let min = i;
    for (var j = i + 1; j < arr3.length; j++) {
      if (arr3[j] < arr3[min]) {
        min = j;
      }
    }
    [arr3[i], arr3[min]] = [arr3[min], arr3[i]];
  }
  console.log(arr3.join(' '));
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`4
    1 5 7 9
    2 4 6 8`);
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
