function runProgram(input) {
  input = input.trim().split('\n');
  var arr = input[1].trim().split(' ').map(Number);
  var arr2 = input[2].trim().split(' ').map(Number);
  const nums = arr.concat(arr2);

  for (var i = 0; i < nums.length; i++) {
    var min = i;
    for (var j = i + 1; j < nums.length; j++) {
      if (nums[j] < nums[min]) {
        min = j;
      }
    }
    [nums[min], nums[i]] = [nums[i], nums[min]];
  }

  console.log(nums.join(' '));
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`4
    1 5 7 9
    2 4 6 8    
       `);
} else {
  process.stdin.resume();
  process.stdin.setEncoding('ascii');
  let read = '';
  process.stdin.on('data', function (input) {
    read += input;
  });
  process.stdin.on('end', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
  });

  process.on('SIGINT', function () {
    read = read.replace(/\n$/, '');
    runProgram(read);
    process.exit(0);
  });
}
