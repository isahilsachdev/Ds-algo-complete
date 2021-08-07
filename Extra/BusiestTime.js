// question : Given an array, data, of data points, write a function findBusiestPeriod
// that returns the time at which the mall reached its busiest moment last year.
//  The return value is the timestamp, e.g. 1480640292. Note that if there is more
//   than one period with the same visitor peak, return the earliest one.

// Assume that the array data is sorted in an ascending order by the timestamp.
//  Explain your solution and analyze its time and space complexities.

data = [
  [1487799425, 14, 1],
  [1487799425, 4, 1],
  [1487799425, 2, 0],
  [1487800378, 10, 1],
  [1487801478, 18, 0],
  [1487801478, 18, 1],
  [1487901013, 1, 0],
  [1487901211, 9, 1],
  [1487901211, 7, 0],
];
console.log(Busy(data));
function Busy(arr) {
  let time = 0;
  let maxCount = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i][2] == 1) {
      count += arr[i][1];
    } else if (arr[i][2] == 0) {
      count -= arr[i][1];
    }
    if (i != arr.length - 1 && arr[i][0] == arr[i + 1][0]) {
      continue;
    }
    if (count > maxCount) {
      maxCount = count;
      time = arr[i][0];
    }
  }

  return time;
}
