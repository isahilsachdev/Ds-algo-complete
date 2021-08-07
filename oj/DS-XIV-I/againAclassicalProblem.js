function runProgram(input) {
  input = input.trim().split('\n');
  input.shift();

  for (let i = 0, j = 0; i < input.length; i++) {
    let stack = [];
    // console.log(i,j)
    let string = input[j++].trim();
    console.log(j, string);

    for (let k = 0; k < string.length; k++) {
      if (string[k] == '(' || string[k] == '{' || string[k] == '[') {
        stack.push(string[k]);
        console.log(stack);
      } else {
        if (stack.length === 0) {
          stack.push(string[k]);
          //closing bracket in input when there is no opening bracket , break in such
          break;
        }
        if (string[k] == ')') {
          if (stack[stack.length - 1] == '(') {
            stack.pop();
          } else {
            break;
          }
        }
        if (string[k] == '}') {
          if (stack[stack.length - 1] == '{') {
            stack.pop();
          } else {
            break;
          }
        }
        if (string[k] == ']') {
          if (stack[stack.length - 1] == '[') {
            stack.pop();
          } else {
            break;
          }
        }
      }
    }
    if (stack.length == 0) console.log('balanced');
    else console.log('not balanced');
  }
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`3
    }(()){}
    (())
    ))))))`);
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
