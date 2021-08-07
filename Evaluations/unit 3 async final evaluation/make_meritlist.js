function runProgram(input) {
  input = input.trim().split('\n');
  input.shift();

  function Sort(a, b) {
    //3 is iq , 2 is weight , 1 is height , 0 is name
    if (a[3] > b[3]) {
      return -1;
    } else if (a[3] < b[3]) {
      return 1;
    } else {
      if (a[1] > b[1]) {
        return -1;
      } else if (a[1] < b[1]) {
        return 1;
      } else {
        if (a[2] > b[2]) {
          return 1;
        } else if (a[2] < b[2]) {
          return -1;
        } else {
          if (a[0] > b[0]) {
            return 1;
          } else {
            return -1;
          }
        }
      }
    }
  }
  // for sorting
  input = input.map((a) => a.trim().split(' ')).sort(Sort);
  // for getting top 8 names

  input.slice(0, 8).map((i) => console.log(i[0]));
}

if (process.env.USERNAME === 'ASUS') {
  runProgram(`10
  jack 158 85 112
  john 168 74 124
  arti 148 65 120
  bhuvan 182 84 124
  navi 182 84 124
  vijay 175 88 115
  amit 180 89 119
  kevin 182 77 120
  rohit 174 85 100
  vivek 184 75 111
  `);
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

// function runProgram(input) {
//   input = input.trim().split('\n');
//   let persons = +input[0];
//   let list = [];
//   for (let i = 1; i <= persons; i++) {
//     list.push(
//       input[i]
//         .trim()
//         .split(' ')
//         .map((el, i) => (i === 0 ? el : +el))
//     );
//   }
//   for (let i = 0; i < list.length; i++) {
//     let index = i;
//     let flag = false;
//     for (let j = i; j < list.length; j++) {
//       if (list[j][3] > list[index][3]) {
//         index = j;
//         flag = true;
//       } else if (list[j][3] === list[index][3]) {
//         if (list[j][1] > list[index][1]) {
//           index = j;
//           flag = true;
//         } else if (list[j][1] === list[index][1]) {
//           if (list[j][2] < list[index][2]) {
//             index = j;
//             flag = true;
//           } else if (list[j][2] === list[index][2]) {
//             if (list[j][0] < list[index][0]) {
//               index = j;
//               flag = true;
//             }
//           }
//         }
//       }
//     }
//     if (flag) {
//       [list[i], list[index]] = [list[index], list[i]];
//     }
//   }
//   console.log(
//     list
//       .slice(0, 8)
//       .map((el) => el[0])
//       .join('\n')
//   );
// }

// if (process.env.USERNAME === 'ASUS') {
//   runProgram(`10
//     jack 158 85 112
//     john 168 74 124
//     arti 148 65 120
//     zhuvan 182 84 124
//     navi 182 84 124
//     vijay 175 88 115
//     amit 180 89 119
//     kevin 182 77 120
//     rohit 174 85 100
//     vivek 184 75 111`);
// } else {
//   process.stdin.resume();
//   process.stdin.setEncoding('ascii');
//   let read = '';
//   process.stdin.on('data', function (input) {
//     read += input;
//   });
//   process.stdin.on('end', function () {
//     read = read.replace(/\n$/, '');
//     read = read.replace(/\n$/, '');
//     runProgram(read);
//   });
//   process.on('SIGINT', function () {
//     read = read.replace(/\n$/, '');
//     runProgram(read);
//     process.exit(0);
//   });
// }
