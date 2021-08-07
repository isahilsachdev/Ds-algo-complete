function runProgram(input) {
  input = input.trim().split('\n');

  for (let i = 1; i < input.length; i++) {
    let str = input[i].trim().split('');
    let stack = [];
    let res = [];

    // for every input element
    for (let j = 0; j < str.length; j++) {
      // for every input element , i am checking if the element aalready exists
      // in stack , if yes increase value else push it to stack
      Exist = false;
      stack.find((a) => {
        if (a[0] == str[j]) {
          Exist = true;
          a[1]++;
        }
      });
      !Exist && stack.push([str[j], 1]);

      //   now i have to traverse from stack and find the first element viz unique

      flag = true;
      // trying to find a unique element
      stack.find((a) => {
        if (flag && a[1] == 1) {
          res.push(a[0]);
          flag = false;
        }
      });
      //    if no unique element i will push #
      flag == true && res.push('#');
    }
    console.log(res.join(''));
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
  abadbcdccdccaef
  abcabc`);
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
