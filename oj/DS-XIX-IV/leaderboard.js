function runProgram(input) {
  input = input.trim().split('\n');
  input.shift();

  //returing 1 means it will switch and b will come first
  //returing -1 means it will not switch and a will come first
  //and 0 means no change

  const sorting = (a, b) => {
    a[1] = Number(a[1]);
    b[1] = Number(b[1]);

    if (a[1] < b[1]) {
      return 1;
    } else if (a[1] > b[1]) {
      return -1;
    } else {
      if (a[0] > b[0]) {
        return 1;
      } else {
        return -1;
      }
    }
  };
  input = input.map((a) => a.split(' ')).sort(sorting);

  let rank = 1;

  input.forEach((e, i) => {
    if (i === 0) {
      console.log(`${rank} ${e[0]}`);
    } else if (e[1] === input[i - 1][1]) {
      console.log(`${rank} ${e[0]}`);
    } else {
      rank = i + 1;
      console.log(`${rank} ${e[0]}`);
    }
  });
}

// runProgram(`6
// rancho 45
// chatur 32
// raju 30
// farhan 28
// virus 32
// joy 45`)
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
