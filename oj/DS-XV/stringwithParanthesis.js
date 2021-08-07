function runProgram(input) {
  let arr = [];
  let paran = [')', '}', ']'];
  let open = ['(', '{', '['];
  for (i in input) {
    paran.includes(input[i]) || open.includes(input[i]) ? arr.push(input[i]) : null;
  }
  let stack = [];
  for (i in arr) {
    if (open.includes(arr[i])) {
      stack.push(arr[i]);
    } else {
      if (!stack.length) {
        stack.push(arr[i]);
        break;
      } else {
        if (arr[i] == ')') {
          if (stack[stack.length - 1] == '(') {
            stack.pop();
          } else {
            break;
          }
        } else if (arr[i] == '}') {
          if (stack[stack.length - 1] == '{') {
            stack.pop();
          } else {
            break;
          }
        } else if (arr[i] == ']') {
          if (stack[stack.length - 1] == '[') {
            stack.pop();
          } else {
            break;
          }
        }
      }
    }
  }
  stack.length == 0 ? console.log('balanced') : console.log('unbalanced');
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);
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
