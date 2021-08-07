function runProgram(input) {
  input = input.trim().split('\n');
  var current = 1;
  var total = Number(input[0]);
  for (let i = 0; i < total; i++) {
    var size = input[current].trim().split(' ').map(Number)[0];

    current++;
    var matrix = [];
    var count = 0;
    // console.log('j', current, size);
    for (let j = current; j < current + size; j++) {
      matrix.push(input[j].trim().split(''));
    }
    // console.log(matrix);
    for (let j = 0; j < matrix.length; j++) {
      for (let k = 0; k < matrix[j].length - 2; k++) {
        if (
          matrix[j][k] == 'i' &&
          matrix[j][k + 1] == 's' &&
          matrix[j][k + 2] == 'a'
        ) {
          //   console.log('hor', j, k);
          count++;
        }
      }
    }
    // vertically
    for (let j = 0; j < matrix.length - 2; j++) {
      for (let k = 0; k < matrix[j].length; k++) {
        // console.log('pairs', j, k);
        // console.log(matrix[2][1], matrix[3][1], matrix[4][1]);
        if (
          //   k < matrix.length - 2 &&
          matrix[j][k] == 'i' &&
          matrix[j + 1][k] == 's' &&
          matrix[j + 2][k] == 'a'
        ) {
          //   console.log('ver', j, k);
          count++;
        }
      }
    }
    console.log(count);
    current += size;
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`1
  7 8
aiiisiaa
iiasssaa
iiissiai
siiaaaii
siaassis
iasiiiaa
siisiaii`);
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
