function runProgram(input) {
  input = input.trim().split('\n');
  let arr = input[1].trim().split(' ').map(Number);
  let finalsum = 0;
  let stack = [];
  for (let i = 0; i < arr.length; i++) {
    finalsum += arr[i];
    stack.push(finalsum);
  }

  //
  //
  // THIS IS THE SOLUTION WHICH PASSED FOR THIS PROBLEM. FOR EACH QUERY WE
  // HAVE TO FIND SUM BETWEEN THOSE INDEXES IN ARR (1 BASED INDEXING).
  //
  //
  for (let i = 3; i < input.length; i++) {
    let queries = input[i].trim().split(' ').map(Number);
    let left = queries[0];
    let right = queries[1];

    if (left >= 2) {
      console.log(stack[right - 1] - stack[left - 2]);
    } else {
      console.log(stack[right - 1]);
    }
  }
}
// 6 8 11 1
if (process.env.USERNAME === 'ASUS') {
  runProgram(`4
      3 2 1 5
      4
      1 3
      2 4
      1 4
      3 3`);
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
