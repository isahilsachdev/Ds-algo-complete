function runProgram(input) {
  input = input.trim().split('\n');
  let nums = input[1].trim().split(' ').map(Number).sort();
//   console.log(nums);
  let res = {};
  let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (res[nums.slice(i, j + 1)] == undefined) {
        res[nums.slice(i, j + 1)] = pos;
        pos++;
      }
    }
  }
  let final = [];
  for (let i = 0; i < pos; i++) {
    final.push(Object.keys(res).find((key) => res[key] === i));
  }
  final.map((a) => {
    if (a.length > 1) {
      console.log(a.split(',').join(' '));
    } else console.log(a);
  });
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
  1 3 2`);
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
