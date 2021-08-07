function runProgram(input) {
  input = input.trim().split('\n');
  // for every row make a object , put in all elements and then put those elements in the
  //  global object which have emenets which are there in all three rows

  line = 1;
  for (let i = 0; i < input[0]; i++) {
    count = 0;
    row = input[line].trim().split(' ').map(Number)[0];
    line++;
    matrix = [];
    for (let j = line; j < line + row; j++) {
      matrix.push(input[j].trim().split(' '));
    }
    // console.log(matrix);
    objOut = {};
    for (let j = 0; j < matrix.length; j++) {
      let objIn = {};
      for (let k = 0; k < matrix[j].length; k++) {
        objIn[matrix[j][k]] = 1;
      }
      for (key in objIn) {
        if (objOut[key] == undefined) {
          objOut[key] = 1;
        } else objOut[key]++;
      }
    }
    for (key in objOut) {
      objOut[key] == row && count++;
    }
    console.log(count);

    line += row;
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
  3 3
  1 2 1 
  1 3 1
  1 2 1
  4 3
  1 2 3
  1 2 3
  1 2 3
  1 2 3
  `);
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
