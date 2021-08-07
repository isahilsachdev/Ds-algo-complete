function runProgram(input) {
  var input = input.trim().split('\n');
  var size = input[0];
  input.shift();
  // console.log(input)

  let main = [];
  let C1 = [];
  let C2 = [];
  let C3 = [];
  let C4 = [];

  for (var i = 0; i < size; i++) {
    const operation = input[i].split(' ');
    // console.log(operation)
    switch (operation[0]) {
      case 'E':
        switch (operation[1]) {
          case '1':
            C1.push(operation[2]);
            main.includes('1') ? null : main.push('1');
            break;

          case '2':
            C2.push(operation[2]);
            main.includes('2') ? null : main.push('2');
            break;

          case '3':
            C3.push(operation[2]);
            main.includes('3') ? null : main.push('3');
            break;

          case '4':
            C4.push(operation[2]);
            main.includes('4') ? null : main.push('4');
            break;
        }
        break;

      case 'D':
        switch (main[0]) {
          case '1':
            //   on line 45 we are printing 1st element which we are removing.
            console.log('1', C1.shift());
            C1.length ? null : main.shift();
            break;

          case '2':
            console.log('2', C2.shift());
            C2.length ? null : main.shift();
            break;

          case '3':
            console.log('3', C3.shift());
            C3.length ? null : main.shift();
            break;

          case '4':
            console.log('4', C4.shift());
            C4.length ? null : main.shift();
            break;
        }
    }
  }
}

// runProgram(`4
// E 3 1
// D
// E 1 1
// D`)

process.stdin.resume();
process.stdin.setEncoding('ascii');
let read = '';
process.stdin.on('data', function (input) {
  read += input;
});
process.stdin.on('end', function () {
  read = read.replace(/\n$/, '');
  runProgram(read);
});

process.on('SIGINT', function () {
  read = read.replace(/\n$/, '');
  runProgram(read);
  process.exit(0);
});
