function runProgram(input) {
  input = input.trim().split('\n');
  var size = Number(input[0]);
  var array = [];

  for (let i = 2; i < input.length; i += 2) {
    array.push([...new Set(input[i].trim().split(' '))]);
  }

//   console.log(array);
  for (var i = 0; i < array.length; i += 2) {
    let arr1 = array[i];
    let arr2 = array[i + 1];
    let res = [];

    for (let j = 0; j < arr1.length; j++) {
      if (arr2.includes(arr1[j])) {
        res.push(arr1[j]);
      }
    }
    console.log(res.length ? res.join(' ') : -1);
  }
}
if (process.env.USERNAME === 'ASUS') {
  runProgram(`2
    6
    1 2 3 3 4 5 6
    3
    3 3 5
    4 
    1 2 3 4
    4 
    5 6 7 8`);
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
