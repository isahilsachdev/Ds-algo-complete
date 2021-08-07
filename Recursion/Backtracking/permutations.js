function runProgram(input) {
  input = input.trim().split('\n');
  let arr = input[1].trim().split(' ').map(Number);
  function gen_permutation(combo, arr) {
    if (arr.length === 0) {
      console.log(combo.join(' '));
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
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
  1 2 3`);
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
// let arr = [1, 2, 3, 4];
// arr.push(arr[0]);
// arr = arr.slice(1);
// console.log(arr);
