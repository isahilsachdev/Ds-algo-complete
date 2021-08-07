function runProgram(input) {
  input = input.trim().split('\n');
  Array.prototype.top = function () {
    return this[this.length - 1];
  };
  for (var i = 2; i < input.length; i = i + 2) {
    var nums = input[i].trim().split(' ').map(Number);
    var stack = [];
    var stack2 = [];
    var chance = [];
    var chance2 = [];
    var result = [];

    for (var j = 0; j < nums.length; j++) {
      if (j == 0) {
        chance.push(-1, 1000);
        stack.push([nums[j], j - stack.top()[1]]);
      } else {
        while (stack.length > 0 && stack.top()[0] <= nums[j]) {
          stack.pop();
        }
        if (stack.length == 0) {
          chance.push(-1);
          stack.push([nums[j], j]);
        } else if (stack.top()[0] > nums[j]) {
          chance.push(stack.top());
          stack.push([nums[j], j - stack.top()[1]]);
        }
      }
    }
    for (var j = nums.length - 1; j >= 0; j--) {
      if (j == nums.length - 1) {
        chance2.push(-1, 1000);
        stack2.push([nums[j], stack.top()[1] - j]);
      } else {
        while (stack2.length > 0 && stack2.top()[0] <= nums[j]) {
          stack2.pop();
        }
        if (stack2.length == 0) {
          chance2.push(-1,1000);
          stack2.push([nums[j], j]);
        } else if (stack2.top()[0] > nums[j]) {
          chance2.push(stack2.top());
          stack2.push([nums[j], stack.top()[1] - j]);
        }
      }
    }
    chance.map((a, i) => {
      if (a[1] >= chance2[i]) {
        result.push(a);
      } else {
        result.push(chance2[i]);
      }
    });
    // console.log(result.join(' '));
    console.log(chance);
    console.log(chance2.reverse());

    console.log(nums);
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`1
    5
    5 4 6 3 9`);
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
