let arr = [
  'p',
  'e',
  'r',
  'f',
  'e',
  'c',
  't',
  '  ',
  'm',
  'a',
  'k',
  'e',
  's',
  '  ',
  'p',
  'r',
  'a',
  'c',
  't',
  'i',
  'c',
  'e',
];
console.log(reverseWords(arr));
  function reverseWords(arr) {
    n = arr.length;
    reverse(arr, 0, arr.length - 1);
    // console.log(arr);
    wordStart = null;
    console.log(wordStart);
    for (let i = 0; i < n; i++) {
      if (arr[i] == ' ') {
        if (wordStart != null) {
          reverse(arr, wordStart, i - 1);
          wordStart = null;
        }
      } else if (i == n - 1) {
        if (wordStart != null) {
          reverse(arr, wordStart, i);
        }
      } else {
        if (wordStart == null) {
          wordStart = i;
        }
      }
    }
    return arr;
  }
  function reverse(arr, start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }
