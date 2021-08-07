arr = [2, 100, 50, 49, 1000];
console.log(findGrantsCap(arr, 190));

function findGrantsCap(arr, newBudget) {
  arr.sort((a, b) => b - a);
  let stack = [];
  let flag = true;
  high = 0;
  low = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[i]) {
        stack.push(arr[i]);
      } else stack.push(arr[j]);
    }
    var sum = 0;
    stack = stack.map((a) => (sum += a));
    if (sum == newBudget) {
      flag = false;
      return arr[i];
    } else if (sum > newBudget) {
      high = arr[i];
    } else if (sum < newBudget) {
      low = arr[i];
    }
    stack = [];
  }
  if (flag == true) {
    while (low < high) {
      let stack = [];
      low = parseFloat((low + 0.1).toFixed(1));
      for (let j = 0; j < arr.length; j++) {
        if (arr[j] > low) {
          stack.push(low);
        } else stack.push(arr[j]);
      }
      var sum = 0;
      stack = stack.map((a) => (sum += a));
      if (sum == newBudget) {
        return low;
      }
    }
  }
}

// SHORT APPROACH BUT MIGHT BE TAKING MORE TIME ...

function findGrantsCap(arr, newBudget) {
  i = 0;
  while (i < newBudget) {
    let stack = [];
    i = parseFloat((i + 0.1).toFixed(1));
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > i) {
        stack.push(i);
      } else stack.push(arr[j]);
    }
    var sum = 0;
    stack = stack.map((a) => (sum += a));
    if (sum == newBudget) {
      return i;
    }
  }
}
