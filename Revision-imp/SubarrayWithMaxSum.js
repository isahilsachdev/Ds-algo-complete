//  subarray with max sum of size k (gks gor gks)
let arr = [1, 4, 2, 3, 6, 8, 7];
let k = 3;
function SubSum(arr, k) {
  const n = arr.length;

  if (n < k) {
    return 'no';
  }
  let CurrentSum = 0;
  for (let i = 0; i < k; i++) {
    CurrentSum += arr[i];
  }
  let maxSum = CurrentSum;
  for (let i = 0; i < arr.length - k; i++) {
    CurrentSum = CurrentSum - arr[i] + arr[i + k];
    maxSum = Math.max(CurrentSum, maxSum);
    console.log(CurrentSum, maxSum);
  }

  return maxSum;
}

console.log(SubSum(arr, k));
