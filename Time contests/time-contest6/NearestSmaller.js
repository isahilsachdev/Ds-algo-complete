function runProgram(input) {
  input = input.trim().split('\n');

  Array.prototype.top = function () {
    return this[this.length - 1];
  };

  for (var a = 2; a < input.length; a += 2) {
    let nums = input[a].trim().split(' ').map(Number);
    var stackLeft = [];
    var outputLeft = [];
    for (var i = 0; i < nums.length; i++) {
      if (i == 0) {
        outputLeft.push(-1);
        stackLeft.push([nums[i], i]);
      } else {
        while (stackLeft.length > 0 && nums[i] <= stackLeft.top()[0]) {
          stackLeft.pop();
        }
        if (stackLeft.length === 0) {
          outputLeft.push(-1);
        } else {
          outputLeft.push(stackLeft.top());
        }
        stackLeft.push([nums[i], i]);
      }
    }
    // console.log(outputLeft);
    var stackRight = [];
    var outputRight = [];
    for (var i = nums.length - 1; i >= 0; i--) {
      if (i == nums.length - 1) {
        outputRight.push(-1);
        stackRight.push([nums[i], i]);
      } else {
        while (stackRight.length > 0 && nums[i] <= stackRight.top()[0]) {
          stackRight.pop();
        }
        if (stackRight.length == 0) {
          outputRight.push(-1);
        } else {
          outputRight.push(stackRight.top());
        }
        stackRight.push([nums[i], i]);
      }
    }
    outputRight.reverse();
    let final = [];
    // console.log(outputRight);
    outputLeft.map((a, i) => {
      if (a == -1 && outputRight[i] == -1) {
        final.push(-1);
      } else if (a == -1) {
        final.push(outputRight[i][0]);
      } else if (outputRight[i] == -1) {
        final.push(a[0]);
      } else if (Math.abs(i - outputRight[i][1]) == Math.abs(i - a[1])) {
        final.push(a[0]);
      } else if (Math.abs(i - outputRight[i][1]) > Math.abs(i - a[1])) {
        final.push(a[0]);
      } else if (Math.abs(i - outputRight[i][1]) < Math.abs(i - a[1])) {
        final.push(outputRight[i][0]);
      }
    });
    console.log(final.join(' '));
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`4
  1
  5
  7
  9 4 3 5 7 3 4
  7
  1 4 6 8 4 7 5
  5
  1 3 3 1 2 `);
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
