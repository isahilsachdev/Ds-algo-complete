function runProgram(input) {
  input = input.split(' ').map(Number);
  let n = input[0];
  let k = input[1];
  let arr = [];

  function gifts(n, k, index, arr) {
    if (arr.length == k) {
      console.log(arr.join(' '));
      return;
    }
    for (let i = index; i <= n; i++) {
      arr.push(i);
      gifts(n, k, ++index, arr);
      arr.pop();
    }
  }
  gifts(n, k, 1, arr);
}

// time complexity for this code will be O(2^n) coz for each call we have
// 2 options either to include it or not include it and it will n times so

if (process.env.USERNAME === 'ASUS') {
  runProgram(`4 2`);
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
