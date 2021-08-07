function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 2; i < input.length; i += 2) {
    let nums = input[i].trim().split(' ').map(Number);
    // console.log(nums);
    console.log(ProArr(nums).join(' '));
  }
  function ProArr(arr) {
    let left = new Array(arr.length);
    let right = new Array(arr.length);
    let output = [];
    left[0] = 1;
    right[right.length - 1] = 1;

    //   left
    for (let i = 1; i < arr.length; i++) {
      left[i] = left[i - 1] * arr[i - 1];
    }

    //   right
    for (let i = arr.length - 2; i >= 0; i--) {
      right[i] = right[i + 1] * arr[i + 1];
    }

    //   output
    for (let i = 0; i < arr.length; i++) {
      output.push(left[i] * right[i]);
    }

    return output;
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
    5
    1 2 3 4 5
    3
    3 2 7`);
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
