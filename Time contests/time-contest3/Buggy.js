function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 1; i < input.length; i += 2) {
    let old = input[i].trim().split('.').map(Number);
    let update = input[i + 1].trim().split('.').map(Number);

    if (old[0] > update[0]) {
      console.log('False');
    } else if (old[0] < update[0]) {
      console.log('True');
    } else {
      if (old[1] > update[1]) {
        console.log('False');
      } else if (old[1] < update[1]) {
        console.log('True');
      } else {
        if (old[2] > update[2]) {
          console.log('False');
        } else {
          console.log('True');
        }
      }
    }
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
  76.26.17
  92.86.47
    12.0.1
    12.10.0
    1.1.10
    1.1.12`);
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
