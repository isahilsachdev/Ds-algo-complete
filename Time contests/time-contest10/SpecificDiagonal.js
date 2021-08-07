function runProgram(input) {
  input = input.trim().split('\n');
  //   k = input[0].trim().split(' ').map(Number)[1];
  //   str = input[1].trim().split('');

  size = input[0].trim().split(' ')[1];
  k = input[input.length - 1];
  matrix = [];
  for (let i = 1; i <= size; i++) {
    nums = input[i].trim().split(' ').map(Number);
    matrix.push(nums);
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] == k) {
        row1 = i;
        row2 = i;
        col1 = j;
        col2 = j;
        // left
        while (row1 != 0 && col1 != 0) {
          row1--;
          col1--;
        }
        left = [];
        while (row1 <= matrix.length - 1 && col1 <= matrix.length - 1) {
          left.push(matrix[row1][col1]);
          row1++;
          col1++;
        }
        console.log(left.join(' '));
        // right
        while (row2 != 0 && col2 != matrix.length - 1) {
          row2--;
          col2++;
        }
        right = [];
        while (col2 >= 0 && row2 <= matrix.length - 1) {
          right.push(matrix[row2][col2]);
          row2++;
          col2--;
        }
        console.log(right.join(' '));
      }
    }
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`10 10
  01 02 03 04 05 06 07
  80 90 10 11 12 13 14
  15 16 17 18 19 20 21
  22 23 24 25 26 27 28
  29 30 31 32 33 34 35
  36 37 38 39 40 41 42
  43 44 45 46 47 48 49
  50 51 52 53 54 55 56
  57 58 59 60 61 62 63
  64 65 66 67 68 69 70
  32`);
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

// nums = 'abcderd';
// console.log(nums.slice(4, 4 + 2));
