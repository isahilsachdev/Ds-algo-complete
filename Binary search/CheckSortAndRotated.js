function runProgram(input) {
  input = input.trim().split('\n');
  nums = input[1].trim().split(' ').map(Number);

  lo = 0;
  hi = nums.length - 1;

  while (lo <= hi) {
    mid = lo + Math.floor((hi - lo) / 2);

    if (nums[mid] == nums[hi]) {
      hi--;
    } else if (nums[mid] > nums[hi]) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }
  flag = true;
  console.log(lo);
  if (lo == 0) {
    flag = false;
  } else {
    // console.log(Sort(0, lo, nums));
    Sort(0, lo, nums) ? null : (flag = false);
    Sort(lo, nums.length - 1, nums) ? null : (flag = false);
  }
  console.log(flag ? 'YES' : 'NO');
}

function Sort(lo, hi, nums) {
  let num1 = nums.slice(lo, hi);
  let num2 = nums.slice(lo, hi).sort((a, b) => a - b);
  flag2 = true;
  num1.map((a, i) => {
    if (a != num2[i]) {
      flag2 = false;
    }
  });
  return flag2 ? true : false;
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`6
    4 6 7 1 2 3 5`);
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
