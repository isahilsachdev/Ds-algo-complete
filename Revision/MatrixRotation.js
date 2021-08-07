mat = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function Rotation(mat) {
  n = mat.length;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      [mat[i][j], mat[j][i]] = [mat[j][i], mat[i][j]];
    }
  }
  // Swapping the rows
  console.log(mat);
  for (let i = 0; i < n / 2; i++) {
    for (let j = 0; j < n; j++) {
      [mat[i][j], mat[n - i - 1][j]] = [mat[n - i - 1][j], mat[i][j]];
    }
  }
  return mat;
}

console.log(Rotation(mat));
//  3 6 9
// 	2 5 8
// 	1 4 7
