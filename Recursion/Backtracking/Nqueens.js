function runProgram(input) {
  let k = Number(input.trim());
  var board = new Array(k).fill(0).map((a) => new Array(k).fill(0));

  // func to check if placing queens is safe at given col and row
  function isSafe(board, row, col) {
    // checking at left side in current row
    for (let i = 0; i < col; i++) {
      if (board[row][i] == 1) {
        return false;
      }
    }

    // checking at upper left diagonal
    for (let i = row, j = col; i >= 0, j >= 0; i--, j--) {
      if (i >= 0 && j >= 0 && board[i][j] == 1) {
        return false;
      }
    }

    // checking at lower left diagonal
    for (let i = row, j = col; i < board.length, j >= 0; i++, j--) {
      if (i < board.length && j >= 0 && board[i][j] == 1) {
        return false;
      }
    }

    // if no queen is placed in all three direc , return true
    return true;
  }

  function NQueens(board, col) {
    // if col value reaches end , meanes all queens are placed return true
    if (col >= k) {
      return true;
    }

    // check for every col from 0 to k
    for (var i = 0; i < k; i++) {
      // if placing queen at current row col is safe , we will make it 1
      if (isSafe(board, i, col)) {
        board[i][col] = 1;

        // recursiverly calling queen at cols ahead
        if (NQueens(board, col + 1)) return true;

        // if not safe in further cols , we will again make current col 0
        board[i][col] = 0;
      }
    }
    // if no queens is placed , we will return false
    return false;
  }

  console.log(NQueens(board, 0) ? board.join('\n') : false);
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`5`);
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
