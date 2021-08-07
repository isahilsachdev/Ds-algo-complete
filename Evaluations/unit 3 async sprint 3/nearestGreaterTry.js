// correct solution

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
    // console.log(nums);
    for (var j = 0; j < nums.length; j++) {
      if (j == 0) {
        chance.push(-1);
        stack.push(j);
      } else {
        while (stack.length > 0 && nums[stack.top()] <= nums[j]) {
          stack.pop();
        }
        if (stack.length == 0) {
          chance.push(-1);
          stack.push(j);
        } else if (nums[stack.top()] > nums[j]) {
          chance.push(stack.top());
          stack.push(j);
        }
      }
    }
    // console.log(chance);

    for (var j = nums.length - 1; j >= 0; j--) {
      if (j == nums.length - 1) {
        chance2.push(-1);
        stack2.push(j);
      } else {
        while (stack2.length > 0 && nums[stack2.top()] <= nums[j]) {
          stack2.pop();
        }
        if (stack2.length == 0) {
          chance2.push(-1);
          stack2.push(j);
        } else if (nums[stack2.top()] > nums[j]) {
          chance2.push(stack2.top());
          stack2.push(j);
        }
      }
    }
    chance2.reverse();

    chance.map((a, i) => {
      let diff = Math.abs(i - a);
      let diff2 = Math.abs(i - chance2[i]);
      if (a == -1 && chance2[i] == -1) {
        result.push(-1);
      } else if (a == -1) {
        result.push(nums[chance2[i]]);
      } else if (chance2[i] == -1) {
        result.push(nums[a]);
      } else if (diff > diff2) {
        result.push(nums[chance2[i]]);
      } else if (diff <= diff2) {
        result.push(nums[a]);
      }
    });
    console.log(result.join(' '));
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
      6
      3 1 8 9 10 2
      2
      2 9
      6
      6 7 9 5 5 4 `);
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
