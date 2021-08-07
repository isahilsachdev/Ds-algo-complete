function permute(arr, start, end) {
  // Base case
  if (start == end) {
    console.log(arr);
  } else {
    // Permutations made
    for (let i = start; i <= end; i++) {
      // Swapping done
      [arr[start], arr[i]] = [arr[i], arr[start]];
      console.log(start, i);
      // Recursion called
      permute(arr, start + 1, end);

      //backtrack
      [arr[start], arr[i]] = [arr[i], arr[start]];
    }
  }
}

const str = ['A', 'B', 'C'];
permute(str, 0, str.length - 1);
