function runProgram(input) {
  input = input.trim().split('\n');
  let stack = [];
  // Array.prototype.top = function () {
  //   return this[this.length - 1];
  // };
  input.shift();
  for (let i = 0; i < input.length; i++) {
    let org = input[i].trim().split('');
    console.log(org);
    let current = org.sort().join('');
    // stack.push([]);
    // let current = input[i].trim().split('').sort();
    // input[i] = input[i].trim().sort();
    // console.log(input[i]);
    // if (stack.top()) {
    //   for (let j = 0; j < stack.length; j++) {
    //     if (j == stack.length - 1 && Equal(stack[j][1], current) == false) {
    //       stack.push([i, current]);
    //     }
    //     if (Equal(stack[j][1], current) == true) {
    //       continue;
    //     }
    //   }
    // } else {
    //   stack.push([i, current]);
    // }
  }
  // let set = [...new Set(input)].sort();
  // console.log(set);

  //   let result = [stack.length];
  //   for (let i = 0; i < stack.length; i++) {
  //     let num = stack[i][0];
  //     result.push(input[num].trim().split(''));
  //   }
  //   result.sort();
  //   result = result.map((a, i) => (i > 0 ? a.join('') : a));
  //   console.log(result.join('\n'));
  // }
  // function Equal(first, second) {
  //   let flag = true;
  //   first.map((a, i) => {
  //     if (a !== second[i]) {
  //       flag = false;
  //     }
  //   });
  //   return flag ? true : false;
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`5
    eodc
    odec
    code
    baca
    aabc
    caba
    aabc`);
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

// let a = 'abcd';
// console.log(a.split(' ').sort().join(''));
