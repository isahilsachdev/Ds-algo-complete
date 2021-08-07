function runProgram(input) {
  input = input.trim().split('\n');
  input = input[1].trim();
  // console.log(input);
  let soFar = [];
  let res = [''];
  // for element to be distinct , i can use obj.
  // res = {};
  sequence(input, 0, soFar);
  function sequence(original, index, soFar) {
    if (index === original.length) {
      return;
    }
    soFar.push(original[index]);
    res.push(soFar.join('')); // if repeatition allowed
    // res[soFar.join('')] = 1; if not allowed
    sequence(original, index + 1, soFar);
    soFar.pop();
    sequence(original, index + 1, soFar);
  }
  console.log(res);
}
// subsequence and subset has same solution
if (process.env.USERNAME === 'ASUS') {
  runProgram(`4
  abc`);
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
