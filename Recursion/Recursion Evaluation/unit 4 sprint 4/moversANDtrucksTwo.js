function runProgram(input) {
  input = input.split('\n');
  let capacity = input[1].trim().split(' ').map(Number);
  transferweight = input[0].trim().split(' ').map(Number)[0];
  let max = 0;
  let min = Number.POSITIVE_INFINITY;

  trucks(capacity, transferweight, 0, 0);
  function trucks(capacity, transferweight, current_weight, days) {
    if (current_weight > transferweight) {
      return;
    }
    if (current_weight == transferweight) {
      min = Math.min(min, days);
      max = Math.max(max, days);
      return;
    }
    for (let i = 0; i < capacity.length; i++) {
      trucks(capacity, transferweight, current_weight + capacity[i], days + 1);
    }
  }
  max > 0 ? console.log(min, max) : console.log(-1);
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`34 4
  10 5 10 6`);
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
