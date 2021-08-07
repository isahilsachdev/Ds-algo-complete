//  find the count of sub-arrays with odd product

// Function that returns the count of
// sub-arrays with odd product
function countSubArrayWithOddProduct(A, N) {
  // Initialize the count variable
  var count = 0;

  // Initialize variable to store the
  // last index with even number
  var last = -1;

  // Initialize variable to store
  // count of continuous odd numbers
  var K = 0;

  // Loop through the array
  for (var i = 0; i < N; i++) {
    // Check if the number
    // is even or not
    if (A[i] % 2 == 0) {
      // Calculate count of continuous
      // odd numbers
      K = i - last - 1;

      // Increase the count of sub-arrays
      // with odd product
      count += (K * (K + 1)) / 2;

      // Store the index of last
      // even number
      last = i;
    }
  }

  // N considered as index of
  // even number
  //   to calculate count of all subarray with odd
  //   elem which are after last even no.
  //   console.log('count', count);
  K = N - last - 1;
  count += (K  * (K + 1)) / 2;
  return count;
}

// var arr = [1, 2, 3, 5, 6];
var arr = [12, 15, 7, 3, 25, 6, 2, 1, 1, 7];
var n = arr.length;

// Function call
console.log(countSubArrayWithOddProduct(arr, n));
