//  we have to find a longest subarray with sum not equal to key

function runProgram(input) {
  input = input.trim().split('\n');
  k = input[0].trim().split(' ').map(Number)[1];
  nums = input[1].trim().split(' ').map(Number);

  len = 0;
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j <= nums.length; j++) {
      subar = nums.slice(i, j);
      sum = 0;
      subar.map((a) => (sum += a));
      if (sum % k !== 0 && subar.length > len) {
        len = subar.length;
        count = 0;
        count++;
      } else if (sum % k == 1 && subar.length == len) {
        count++;
      }
    }
  }
  console.log(count);
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`5 3
  2 4 3 5 1`);
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
