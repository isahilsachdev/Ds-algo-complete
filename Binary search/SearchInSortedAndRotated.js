function runProgram(input) {
  input = input.trim().split('\n');
  k = input[0].trim().split(' ').map(Number)[1];
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

  //   got the smallest element , now find the required element
  if (k == nums[lo]) {
    console.log(lo);
  } else if (k >= nums[0] && k <= nums[lo - 1]) {
    console.log(BinarySearch(0, lo - 1, nums, k));
  } else {
    console.log(BinarySearch(lo, nums.length - 1, nums, k));
  }
}
function BinarySearch(lo, hi, nums, k) {
  while (lo <= hi) {
    mid = lo + Math.floor((hi - lo) / 2);
    if (nums[mid] == k) {
      return mid;
    } else if (nums[mid] > k) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return -1;
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`10 -1
  4 6 7 9 10 -1 0 1 2 3`);
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
