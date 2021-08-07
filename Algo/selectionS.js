function runProgram(input) {
  input = input.trim().split('\n');
  var nums = input[1].trim().split(' ').map(Number);

  for (var i = 0; i < nums.length; i++) {
    console.log(nums);
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
// minimumSwaps([1, 3, 5, 2, 4, 6, 7]);
// function minimumSwaps(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let min = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }

//     if (min != i) {
//       [arr[min], arr[i]] = [arr[i], arr[min]];
//       count++;
//     }
//   }
//   console.log(count);
// }
if (process.env.USERNAME === 'ASUS') {
  runProgram(`7
  8 3 5 2 4 6 7
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
