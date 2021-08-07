function runProgram(input) {
  input = input.trim().split('\n');
  var arr = input[1].trim().split(' ').map(Number);

  QuickSort(0, arr.length - 1, arr);
  console.log(arr.join(' '));

  function QuickSort(lo, hi, arr) {
    if (lo < hi) {
      index = Partition(lo, hi, arr);
      QuickSort(lo, index - 1, arr);
      QuickSort(index + 1, hi, arr);
    } else {
      return;
    }
  }

  // partition which divide array in smaller and larger section from a pivot
  function Partition(lo, hi, arr) {
    var i = lo;
    j = hi;
    pivot = arr[hi];
    while (i < j) {
      while (arr[i] < pivot && i < hi) {
        i++;
      }
      while (arr[j] >= pivot && j > 0) {
        j--;
      }
      if (i < j) {
        // swap small and large at i and j
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    // swapping pivot elem and putting it in place
    //  from where its previous elements are less and next elements are higher

    [arr[hi], arr[i]] = [arr[i], arr[hi]];
    return i;
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`4
    2 3 1 5 4 6 0 8 22 `);
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
