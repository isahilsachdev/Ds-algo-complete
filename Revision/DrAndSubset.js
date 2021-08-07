function runProgram(input) {
  input = +input;
  let nums = new Array(input).fill(0).map((a, i) => {
    return i + 1;
  });
  //   console.log(nums);
  console.log(' ');
  Sub(nums, 0, []);
  function Sub(arr, index, cur) {
    if (index == arr.length) {
      return;
    }
    cur.push(arr[index]);
    console.log(cur.join(' '));
    Sub(arr, index + 1, cur);
    cur.pop();
    Sub(arr, index + 1, cur);
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`3`);
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
