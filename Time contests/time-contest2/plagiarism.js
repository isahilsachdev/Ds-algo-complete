function runProgram(input) {
  input = input.trim().split('\n');
  let num = Number(input[0]);
  let various = input[1].trim().split(' ').map(Number);
  let L = various[0];
  let R = various[1];
  let arr = new Array(num).fill(0).map((a, i) => i + 1);
  let count = 0;
  function gen_permutation(combo, arr) {
    if (arr.length === 0) {
      let sum = 0;
      for (let i = L; i <= R; i++) {
        sum += +combo[i];
      }
      if (sum % 2 == 1) {
        count++;
      }
      return;
    } else {
      for (let i = 0; i < arr.length; i++) {
        let temp = [...arr];
        let sep = temp.splice(i, 1);
        gen_permutation([...combo, sep], temp);
      }
    }
  }
  gen_permutation([], arr);
  console.log(count);
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
  0 1`);
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
